 
 export default function SortSelect({value,onChange}){

    return (
        <select value={value} onChange={e=>onChange(e.target.value)}>
            <option value="title-asc">Title</option>
            <option value="create-Desc">Newest</option>
            <option value="create-asc">Oldest</option>

        </select>
    )
 }