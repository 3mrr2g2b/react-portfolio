import { useState, useEffect } from "react";
const Api_hook = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    
    useEffect(() =>{
        const fetchData = async () =>{
            setLoading(true)
            try {
                /* code */
                const response =await fetch(url)
                const result =await response.json()
                setData(result.ok)
            } catch (error) {
                setError(error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {data,error,loading}
}

export default Api_hook;