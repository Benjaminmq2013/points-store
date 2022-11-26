import fetchData from '../api/fetchData';
import { useDispatch } from 'react-redux';
import { setLoading } from '../store/slices/shop';

interface params{
    createAlert: (message: string, color?: string | undefined) => void
    selected: "basic" | "premium" | "gold" | null
    isLoading: boolean
    updateUserInfo: () => void
}
  
const getPointsHandler = (params:params) => {

    const dispatch = useDispatch() 
    const handleLoading = (loading: boolean) => dispatch(setLoading(loading))

    const handleGetPoints = () => {
        if (params.isLoading) return
        if (params.selected === null) return
        if (navigator.onLine === false) {
            params.createAlert("Not internet connection")
            return
        }

        fetchData({
            method: "post",
            entryPoint: "/user/points",
            data: { "amount": params.selected === "basic" ? 1000 : params.selected === "premium" ? 5000 : params.selected === "gold" ? 7500 : 0 },
            
            onLoading: (loading: boolean) => handleLoading(loading),
            then: () => {
                params.updateUserInfo()
                params.createAlert("Points added successfully!", "#5AD866")
            }
        })

    }


    return handleGetPoints
}

  export default getPointsHandler