import { SET_PAGE } from '../actions/pagination'

const INITIAL_STATE = {
  page: 1
}

export default function pagination(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, page: action.page }

    default:
      return state
  }
}