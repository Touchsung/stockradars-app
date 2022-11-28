import { useState } from "react"
import CompanyLists from "./components/CompanyLists"
import SearchComponent from "./components/SearchComponent"

const App = () => {
    const [searchName, setSearchName] = useState('')
    return (
        <>
            <SearchComponent searchName={searchName} setSearchName={setSearchName} />
            <CompanyLists searchName={searchName} />
        </>
    )
}

export default App