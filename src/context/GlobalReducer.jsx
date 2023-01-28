

export default function GlobalReducer(state, action) {

  //console.log(action)

  switch (action.type) {
    
    case 'SET_CURRENT_TABLE':
      return {
        ...state,
        currentTable: action.payload
      };

    case 'RESET_CURRENT_TABLE':
      return {
        ...state,
        currentTable: ''
      };

    case 'UPDATE_TABLE_ORDER':
      return {
        ...state,
        tables: action.payload
      };  

    case 'SET_MODAL_STATUS':
      return {
        ...state,
        showModal: !state.showModal
      };

    case 'SET_MESSAGE_MODAL_STATUS':
      return {
        ...state,
        showMessageModal: !state.showMessageModal
      };

    default:
      return state;
  }
}
