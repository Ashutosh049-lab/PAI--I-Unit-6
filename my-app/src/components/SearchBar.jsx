
export default function SearchBar({value,onChange,onAdd}){

    return (
        <div className="controls">
            <input type="text"
            placeholder="search by title or # tag.."
            value={value}
            onChange={e=>onChange(e.target.value)}
            />
           
           <button className="primary" onClick={onAdd}>Add Photo</button>
        </div>
    )

}