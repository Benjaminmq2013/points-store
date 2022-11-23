import { useSelector } from 'react-redux';
import { filterTypes } from '../interface/filterTypes';
import { RootState } from '../store/index';
import { filterByPrice, filterByPage } from '../helpers/filters';


const useFilterProducts = ( filters: filterTypes ) => {
    const data = useSelector((state: RootState) => state.shopReducer.products )

    // This variable prevents us from making another request
    let filteredData = data;

    // Passing data through every filter
    filteredData = filterByPrice(filteredData, filters.sortBy)
    filteredData = filterByPage(filteredData, filters.pagination)
    

  return filteredData
}

export default useFilterProducts