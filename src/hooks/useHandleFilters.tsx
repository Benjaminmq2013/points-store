import { useState } from 'react';
import useFilterProducts from './useFilterProducts';
import { filterTypes } from '../interface/filterTypes';


const useHandleFilters = () => {
    const [ filters, setFilters ] = useState<filterTypes>({ pagination: 0, sortBy: 'highest' })
    const filteredProducts = useFilterProducts(filters)
  
    const handleHighest = () => setFilters({ ...filters, sortBy: "highest" })
    const handleLowest = () => setFilters({ ...filters, sortBy: "lowest" })
    const handleRecent = () => setFilters({ ...filters, sortBy: "recent" })
  
    return { filteredProducts, handleHighest, handleLowest, handleRecent }
}

export default useHandleFilters