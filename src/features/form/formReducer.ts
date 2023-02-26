import { FormState } from '../../models/interfaces';
import { FILL, NEW, RESET } from '../../actions';

const initialState = {}

export default function form(state: FormState = initialState, action) {
  switch(action.type) {
    case NEW: {
      return initialState
    }
    case FILL:
      return {
        ...state,
        ...action.item,
        isEdit: true
      }
    case RESET:
      return initialState
    default:
      return {
        ...state,
        ...action.item
      }
  }
}