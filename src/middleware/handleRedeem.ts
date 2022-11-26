import { T } from "../interface"
import { useDispatch } from 'react-redux';
import { setLoading } from "../store/slices/shop";
import fetchData from "../api/fetchData";



interface params{
    isLoading: boolean
    user: T.user
    createAlert: (message: string, color?: string | undefined) => void
    getUser: () => void
}


const redeemHandler = (params:params) => {

    const dispatch = useDispatch()
    const handleLoading = (loading: boolean) => dispatch(setLoading(loading))

    const handleRedeem = (product: T.products) => {  
        // Error handlers
    
        if( params.isLoading ) return    
        
        if( params.user.points < product.cost ){
          params.createAlert(`You need ${product.cost - params.user.points} points more`, "#FF8585")
          return
        }
        
        if(navigator.onLine === false) {
          params.createAlert("Not internet connection")
          return
        }
        
        // Making request
        
        fetchData({ 
          method: "post", 
          entryPoint: "/redeem", 
          data: { "productId": product._id },
          
          onLoading: (loading: boolean) => handleLoading(loading), 
          then: () => {
            params.getUser()
            params.createAlert("Purchase successfull!", "#5A8CD8")
          }
        })
    
    }

    return handleRedeem;
}

export default redeemHandler