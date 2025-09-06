 
 export default function SortSelect({sort,setSort}){

    return (
        <select value={sort} onChange={e=>setSort(e.target.value)}>
            <option value="asc">Sort</option>
            <option value="desc">Sort</option>
            <option value="create-asc">Oldest</option>

        </select>
    )
 }