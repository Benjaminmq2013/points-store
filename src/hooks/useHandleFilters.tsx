import { useState } from 'react';
import useFilterProducts from './useFilterProducts';
import { filterTypes } from '../interface/filterTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const useHandleFilters = () => {
    const data = useSelector((state: RootState) => state.shopReducer.products )

    const [ filters, setFilters ] = useState<filterTypes>({ pagination: 1, sortBy: 'recent' })
    const filteredProducts = useFilterProducts(filters) 
      

    // Pagination handlers
    const handleNextPage = () => {
        if(filters.pagination * 16 < data.length ) 
            setFilters({ ...filters, pagination: filters.pagination + 1 })
        
    }
    const handleLastPage = () => {
        if(filters.pagination > 1)
            setFilters({ ...filters, pagination: filters.pagination - 1 })    
    }
 
    
    
    // Sort By. Handlers
    const handleHighest = () => setFilters({ ...filters, sortBy: "highest" })
    const handleLowest = () => setFilters({ ...filters, sortBy: "lowest" })
    const handleRecent = () => setFilters({ ...filters, sortBy: "recent" })
  
    return { 

        handleHighest, 
        handleLowest, 
        handleRecent, 
        
        handleNextPage, 
        handleLastPage, 

        filteredProducts, 
        filters 
    }
}

export default useHandleFilters