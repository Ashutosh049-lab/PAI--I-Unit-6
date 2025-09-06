
export default function SearchBar({search,setSearch}){

    return (
        <div className="controls">
            <input type="text"
            placeholder="search by title or # tag.."
            value={search}
            onChange={e=>setSearch(e.target.value)}
           
            />
           
          
        </div>
    )

}