import React, { useState, useEffect } from "react"
import axios from "axios"



function useFetch (url) {

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

const fetchData = async () => {
    try {
    const {data: CategoryData} = (await axios.get(url))
    setData(CategoryData)
    setLoading(false)
    }
    catch(err){
        setLoading(false)
        setError(err.message)
    }
}

useEffect(()=> {fetchData()}, [])

    return (
       {data , error, loading}
    )
 }

   
 export default useFetch
 