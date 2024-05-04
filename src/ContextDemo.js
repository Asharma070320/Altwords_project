import {createContext,useContext,useState} from 'react'

export const UserContext = createContext({});

const ContextDemo = (props) => {
    const[data,setData] = useState(null);
  return (
    <UserContext.Provider value={{data,setData}}>
      {props.children}
    </UserContext.Provider>
  )
}

export const GetCtx = () =>{
    const Ctx = useContext(UserContext);
    return Ctx;
}

export default ContextDemo
