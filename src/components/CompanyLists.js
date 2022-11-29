import axios from "axios"
import { useEffect, useState } from "react"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const CompanyLists = (props) => {
    const { language } = props
    const [companyLists, setCompanyLists] = useState([])
    const [page, setPage] = useState(1)
    const amountCardPerPage = 5

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const getCompanyLists = async () => {
        const response = await axios.get('https://stockradars.co/assignment/data.php')
        setCompanyLists([...response.data])
    }

    const handlePage = (action) => {
        if (action === "next" && page < Math.ceil(companyLists.length / amountCardPerPage)) {
            setPage(page + 1)
            scrollToTop()
        }

        if (action === "back" && page > 1) {
            setPage(page - 1)
            scrollToTop()
        }

    }

    useEffect(() => {
        getCompanyLists()
    }, [])

    return (
        <div className="min-w-screen bg-slate-100">
            <section className="container max-w-screen-2xl mx-auto text-gray-800 px-10 md:px-40 py-10 relative">
                {
                    companyLists.slice(amountCardPerPage * page - amountCardPerPage, amountCardPerPage * page).map((item, index) => {
                        return (
                            <div key={index} className=" bg-white shadow rounded-md p-10 flex flex-col gap-2 mb-10">
                                <h2 className=" text-xl font-bold">{language === 'TH' ? item.N_COMPANY_T : item.N_COMPANY_E}</h2>
                                <hr className="my-2 border-gray-800" />
                                {item.marketcap && <h3 h3 className="font-bold">{language === 'TH' ? "มูลค่าหลักทรัพย์" : "MarketCap"} : <span className="font-medium">{item.marketcap.toLocaleString()} {language === 'TH' ? "บาท" : "Bath"} </span></h3>}
                                <p className="font-bold">{language === 'TH' ? "รายละเอียด" : "Description"} : <span className="font-medium leading-9">{language === 'TH' ? item.N_BUSINESS_TYPE_T : item.N_BUSINESS_TYPE_E}</span>
                                </p>
                            </div>
                        )
                    })
                }
                <div className="page flex items-center gap-2 justify-center">
                    <GrFormPrevious className="text-2xl" onClick={() => handlePage("back")} />
                    <h4 className="font-bold">{page} / {Math.ceil(companyLists.length / amountCardPerPage)} </h4>
                    <GrFormNext className="text-2xl" onClick={() => handlePage("next")} />
                </div>
            </section>
        </div>
    )
}

export default CompanyLists