import { consts } from './consts'
import { initial } from './initial'

export const actionHandlers = {

  [consts.EDIT_ITEM]: (state, action) => {
    const { id, title, color } = action.payload
    return { ...state, editedItem: { id, title, color }, isEdit: true}
  },

  [consts.SAVE_CHANGES]: (state, action) => {
  const result = { ...state, isEdit: false }
  const newItems = state.items.map(i => {
      if(i.id === action.payload.id) {
        return action.payload
      }else{
        return i
      }
  })
  result.items = newItems;
  result.editedItem = '';
  return result
}

}

export const reducers = (state = initial, action) => {
  const handler = actionHandlers[action.type]
  return handler ? handler(state, action) : state
}

export default reducers
