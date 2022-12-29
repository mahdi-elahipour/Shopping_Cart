import React,{useEffect,useState} from 'react'
import { fetchData } from './helpers';
export const contextProvider=React.createContext();
function ProductContextProvider({children}) {
   const [data,setData]=useState([]);
   useEffect(()=>{
    const getData=async function(){
        setData(await fetchData());
    }
    getData();
   },[])

  return (
    <contextProvider.Provider value={data}>
        {children}
      {
   console.log(data)

      }
    </contextProvider.Provider>
  )
}

export default ProductContextProvider;
