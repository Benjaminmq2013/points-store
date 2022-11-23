// The initial request to get products, user info and history

import { T } from "../interface"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setProducts, setLoading, setUser } from '../store/slices/shop';
import fetchData from "../api/fetchData";
import { useEffect } from 'react';



const useGetData = () => {

    const dispatch = useDispatch()

    const products = useSelector((state: RootState) => state.shopReducer.products)
    const user = useSelector((state: RootState) => state.shopReducer.user)
    const isLoading = useSelector((state: RootState) => state.shopReducer.loading )    
    
    const handleLoading = (loading: boolean) => dispatch(setLoading(loading))
    const handleSetProducts = (products: T.products[]) => dispatch(setProducts(products));
    const handleSetUser = (user: T.user) => dispatch(setUser(user));


    // Poduct List
  
    const getProducts = () => fetchData<T.products[]>(
      { entryPoint: "/products", onLoading: (loading: boolean) => handleLoading(loading) },
      { setData: (products: T.products[]) => handleSetProducts(products) }
    );
  
    // User Information
   
    const getUser = () => fetchData<T.user>(
      { entryPoint: "/user/me", onLoading: (loading: boolean) => handleLoading(loading) },
      { setData: (user: T.user) => handleSetUser(user) }
    );


    useEffect(() => {
      getProducts()
      getUser()
      isLoading
    }, [])
    

  return { products, user, isLoading, getProducts, getUser }
}

export default useGetData