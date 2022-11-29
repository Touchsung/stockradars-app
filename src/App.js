import { useState } from "react"
import CompanyLists from "./components/CompanyLists"
import NavComponent from "./components/NavComponent"

const App = () => {
    const [language, setLanguage] = useState("TH")
    return (
        <>
            <NavComponent language={language} setLanguage={setLanguage} />
            <CompanyLists language={language} />
        </>
    )
}

export default App