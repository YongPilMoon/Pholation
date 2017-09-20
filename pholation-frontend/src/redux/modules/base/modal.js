import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/* actions */
const MODAL_OPEN = 'modules/modal/MODAL_OPEN';
const MODAL_CLOSE = 'modules/modal/MODAL_CLOSE';

/* action creators */
export const openModal = createAction(MODAL_OPEN); // modalName, payload
export const closeModal = createAction(MODAL_CLOSE); // modalName

/* initialState */
const initialState = Map({
  signup: Map({
    open: false
  })
});

/* reducer */
export default handleActions({
  [MODAL_OPEN]: (state, action) => {
    const { modalName, payload } = action.payload;
    return state.mergeIn([modalName], {
      open: true,
      ...payload
    })
  },
  [MODAL_CLOSE]: (state, action) => {
    const modalName = action.payload;
    return state.setIn([modalName, 'open'], false);
  }
}, initialState);