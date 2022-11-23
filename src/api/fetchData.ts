import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

export interface params{
    entryPoint?: string
    method?: "post" | "get",
    headers?: object,
    params?: object,  
    data?: object,  
    then?: () => void
    
    onLoading: (loading: boolean) => void
}

const fetchData = <Types,>( params: params, callback?: { setData: (data: Types) => void }  ) => {   

    const URL:string = `https://coding-challenge-api.aerolab.co${params.entryPoint}`
    const TOKEN:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc3Njg5NGJmNWY2NjAwMWEyNzNiYTUiLCJpYXQiOjE2Njg3Njk5NDB9.sAjxfiFpgddcITSQlNhLlqMWDbeYTGZfOPK6fwf7VK4"
    
    const config:AxiosRequestConfig = {
        url: URL,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": TOKEN
        },
        method: params.method ? params.method : "get",
        data: params.data || null,
        
    }
  
    
    params.onLoading(true)
    axios( config )
    
    .then((response:AxiosResponse<Types>) => {            
        params.onLoading(false)
        callback && callback.setData(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
    .then(() => params.then && params.then())
    
   
}

export default fetchData