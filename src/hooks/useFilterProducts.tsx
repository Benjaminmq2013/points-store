import { useSelector } from 'react-redux';
import { filterTypes } from '../interface/filterTypes';
import { RootState } from '../store/index';
import { filterByPrice } from '../helpers/filters';


const useFilterProducts = ( filters: filterTypes ) => {
    const data = useSelector((state: RootState) => state.shopReducer.products )

    // This variable prevents us from making another request
    let filteredData = data;

    // filtering
    filteredData = filterByPrice(filteredData, filters.sortBy)
    

  return filteredData
}

export default useFilterProducts