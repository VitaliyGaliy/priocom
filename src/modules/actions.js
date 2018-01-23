import { consts } from './consts'

export const editSquare = (e) => (dispatch, getState) =>  (
  dispatch({ type: consts.EDIT_ITEM, payload: e})
)

export const saveChanges = (i) => (dispatch, getState) => (
  dispatch({ type: consts.SAVE_CHANGES, payload: i})
)

export const actions = {
  editSquare,
  saveChanges,
}

export default actions
