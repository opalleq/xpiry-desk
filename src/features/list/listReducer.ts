import { Item } from '../../models/interfaces';
import { ADD, DELETE, UPDATE } from '../../actions';

const initialState = [];

export default function items(state: Item[] = initialState, action) {
  switch(action.type) {
    case ADD:
      const newItem = {...action.item, id: state.length}
      return [
          ...state,
        newItem
      ]
    case UPDATE:
      return state.map(item =>
          item.id === action.item.id ?
              { ...action.item } : item
      )
    case DELETE:
      return state.filter(item =>
          item.id !== action.id
      )
    default:
      return state
    }
}