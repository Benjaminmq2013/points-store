import { T } from "../interface"
import { filterTypes } from '../interface/filterTypes';


export const filterByPrice = (filteredData:T.products[], filter: filterTypes["sortBy"] ):T.products[] => {
  switch (filter) {
    case "recent":
        return filteredData;
        case "highest":
        return filteredData.slice().sort((a, b) => b.cost - a.cost);
      case "lowest":
        return filteredData.slice().sort((a, b) => a.cost - b.cost);
    }
    
}

export const filterByPage = (filteredData:T.products[], filter: filterTypes["pagination"] ):T.products[] => {
  
  let from = (filter * 16) - 16
  let to = (filter * 16)

  return filteredData.slice(from, to)
    
}

