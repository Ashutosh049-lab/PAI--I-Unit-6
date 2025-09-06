
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'


import './App.css'
// import { useAuth } from './context/AuthContext'

// function Gate(){
//   const {ready,user}=useAuth();

//   if(!ready){
//     return <div></div>
//   }
// }

function App() {
    

  return (
    <>
     <NavBar/> 
     <SearchBar/>
    </>
  )
}

export default App
