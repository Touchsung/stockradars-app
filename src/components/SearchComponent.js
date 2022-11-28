const SearchComponent = (props) => {
    const { searchName, setSearchName } = props
    return (
        <section className="w-screen bg-white max-w-screen-2xl mx-auto shadow-sm h-14 text-gray-800 py-4">
            <nav className="flex justify-between items-center w-full px-40">
                <h1 className="font-bold text-red-600 text-xl">Stock<span className="font-medium text-gray-800">Radars</span></h1>
                <input type="text" id="search" name="search" placeholder="กรุณากรอกชื่อบริษัทที่ต้องการค้นหา" className="w-80 px-4 py-1 border border-gray-800 rounded-full text-sm text-gray-800" onChange={(e) => setSearchName(e.target.value)} value={searchName}></input>
                <h3>TH</h3>
            </nav >
        </section>
    )
}

export default SearchComponent