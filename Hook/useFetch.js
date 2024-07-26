import { useState,useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from "@env";

// const rapidapikey = RAPID_API_KEY

const useFetch = (endpoint , query) => {
    const [data,setData] = useState([]);
    const [isLoading,SetIsloading] = useState(false);
    const [error,setError] = useState(null);

    
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
     
        headers: {
          'x-rapidapi-key': "1241492188msh535e2c84976743fp1ec52djsnc1b031ea0e25",
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },

        params: {...query},

 
      };

      const fetchData = async ()  =>{
        SetIsloading(true);

        try{
            const response = await  axios.request(options);
            setData(response.data.data)

          
        }catch (error){
            setError(error);
            alert("There is an error");
        }finally{
            SetIsloading(false);
        }
     }
      

     useEffect(() =>{
        fetchData();
     },[])
    
      const refetch = () => {
        SetIsloading(true);
        fetchData();
      }

      return { data,isLoading,error,refetch }
      

}

export default useFetch;