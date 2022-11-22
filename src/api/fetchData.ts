import axios, { AxiosResponse } from "axios"

export interface params{
    entryPoint?: string
    method?: "post" | "get",
    headers?: object,
    params?: object,  
    
    onLoading: (loading: boolean) => void
}

const useFetch = <Types,>( params: params, callback: { setData?: (data: Types) => void }  ) => {   

    const URL:string = `https://coding-challenge-api.aerolab.co${params.entryPoint}`
    const TOKEN:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc3Njg5NGJmNWY2NjAwMWEyNzNiYTUiLCJpYXQiOjE2Njg3Njk5NDB9.sAjxfiFpgddcITSQlNhLlqMWDbeYTGZfOPK6fwf7VK4"
    
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": TOKEN
        },
        method: params.method || "get",
    }
  
    
    params.onLoading(true)
    axios.get(URL, config)
    
    .then((response:AxiosResponse<Types>) => {            
        params.onLoading(true)
        callback.setData && callback.setData(response.data)
    })
    .catch((error) => {
        
        console.log(error)
    })

    
    
   
}

export default useFetch