import { useState,useEffect } from "react";
function usefetch(url){
    const[data,setdata]=useState(null)
    const[loading,setloading]=useState(true)
    const[error,seterror]=useState(null)
    useEffect(()=>{
        if(!url) return;
        setloading(true);
        seterror(null);
        fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error(`Error=${response.status}`);
            }
            return response.text();
        })
        .then(data=>{
            setdata(data)
            setloading(false)
        })
        .catch(err=>{
            seterror(err.message)
            setdata(null)
            setloading(false)
        })
    },[url])
    return{data,loading,error}


}
export default usefetch