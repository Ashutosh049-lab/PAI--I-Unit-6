
// import { createContext,useContext,useEffect,useState } from "react";


// const AuthContext=createContext({user:null});

// export function AuthProvider({children}){
//     const [user,setUser]=useState(null);
//     const [ready,setReady]=useState(false);

//     useEffect(()=>onAuth(u=>{
//         setUser(u);
//         setReady(true);
//     }),[])

//     return (
//             <AuthContext.Provider value={{user,ready}}>
//                 {children}
//             </AuthContext.Provider>
//     )
// }

// export const useAuth=()=>useContext(AuthContext)