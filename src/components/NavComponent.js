const NavComponent = (props) => {
    const { setLanguage, language } = props
    return (
        <nav className="w-screen bg-white max-w-screen-2xl mx-auto flex justify-between items-center shadow-sm h-20 text-gray-800 px-10 md:px-40">
            <h1 className="font-bold text-red-600 text-2xl">Stock<span className="font-medium text-gray-800">Radars</span></h1>
            <h3 className="font-bold text-gray-800"><span className={language === 'TH' ? "font-bold" : "font-medium text-gray-600"} onClick={() => setLanguage("TH")}>TH</span><span>/</span><span className={language === 'EN' ? "font-bold" : "font-medium text-gray-600"} onClick={() => setLanguage("EN")}>EN</span></h3>
        </nav >
    )
}

export default NavComponent