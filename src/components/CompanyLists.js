import axios from "axios"
import { useEffect, useState } from "react"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const CompanyLists = (props) => {
    // const { searchName } = props
    const [companyLists, setCompanyLists] = useState([])
    const [page, setPage] = useState(1)
    const amountCardPerPage = 5


    const getCompanyLists = async () => {
        const response = await axios.get('https://stockradars.co/assignment/data.php')
        setCompanyLists([...response.data])
    }

    const handlePage = (action) => {
        if (action === "next" && page < Math.ceil(companyLists.length / amountCardPerPage)) {
            setPage(page + 1)
        }

        if (action === "back" && page > 1) {
            setPage(page - 1)
        }

    }

    useEffect(() => {
        getCompanyLists()
    }, [])

    return (
        <section className="w-screen max-w-screen-2xl min-h-screen mx-auto text-gray-800 px-40">
            {
                companyLists.slice(amountCardPerPage * page - amountCardPerPage, amountCardPerPage * page).map((item, index) => {
                    return (
                        <div key={index} className=" bg-white shadow rounded-md p-10 flex flex-col gap-2 mt-10">
                            <h2 className=" text-xl font-bold">{item.N_COMPANY_T}</h2>
                            <hr className="my-2 border-gray-800" />
                            <h3 className="font-bold">มูลค่าหลักทรัพย์ : <span className="font-medium">{item.marketcap.toLocaleString()} บาท</span></h3>
                            <h3 className="font-bold">รายละเอียด : <span className="font-medium leading-9">{item.N_BUSINESS_TYPE_T}</span>
                            </h3>
                        </div>
                    )
                })
            }
            <div className="page flex items-center gap-2 justify-center my-10">
                <GrFormPrevious className="text-2xl" onClick={() => handlePage("back")} />
                <h4 className="font-bold">{page} / {Math.ceil(companyLists.length / amountCardPerPage)} </h4>
                <GrFormNext className="text-2xl" onClick={() => handlePage("next")} />
            </div>
        </section>
    )
}

export default CompanyLists