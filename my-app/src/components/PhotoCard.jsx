
 export default function PhotoCard({photo,onClick}){
     return (
        <div onClick={()=>onClick(photo)}>

            <img src={photo.url} alt={photo.title}/>

             <div>{photo.title}</div>
        </div>
     )
 }




















