
import { createContext, useContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
// DATA
import {items} from '../data/items';
import {tables} from '../data/tables';

const initialState = {
  menuItems:items,
  tables:tables,
  currentTable:'',
  showModal:false,
  showMessageModal:false,
};

export const globalContext = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  // =========== UPDATE MODAL STATUS =========== 
  const setModalStatus = () => {
    dispatch({
      type: "SET_MODAL_STATUS"
    });
  }

  // =========== UPDATE MESSAGE MODAL STATUS ======== 
  const setMessageModalStatus = (text) => {
    dispatch({
      type: "SET_MESSAGE_MODAL_STATUS"
    });
  }

  // =========== SET CURRENT TABLE =========== 
  const setCurrentTable = (id) => {
    let tableId = state.tables.findIndex(table => table.id == id);
    
    dispatch({
      type: "SET_CURRENT_TABLE",
      payload: state.tables[tableId]
    });
  };

  // =========== ADD NEW ITEM TO TABLE ===================
  const addItemToTableOrder = (newItem) => {
    let updatedTables = state.tables.map(table => table.id == state.currentTable.id 
      ? {
        ...table, 
        available:false,
        orderedItems: [...table.orderedItems, newItem],
      }
      : table
    )

    dispatch({
      type: "UPDATE_TABLE_ORDER",
      payload: updatedTables
    });

    setModalStatus();
    setMessageModalStatus();

    dispatch({
      type: "RESET_CURRENT_TABLE"
    });

    setTimeout(() => {
      setMessageModalStatus();
    },1000);

  };

  // =========== REMOVE ITEM FROM TABLE =========== 
  const deleteItemFromTableOrder = (itemId, tableId) => {
   let updatedTables = state.tables.map(table => table.id == tableId 
      ? {
        ...table, 
        orderedItems: [...table.orderedItems.filter(item => item.id != itemId)],
      }
      : table
    )

    dispatch({
      type: "UPDATE_TABLE_ORDER",
      payload: updatedTables
    });

    dispatch({
      type: "RESET_CURRENT_TABLE"
    });
  }
  
  const contextInfo = {
    dispatch,
    // STATE ITEMS
    menuItems:    state.menuItems,
    tables:       state.tables,
    currentTable: state.currentTable,
    showModal:    state.showModal,
    showMessageModal: state.showMessageModal,
    // ACTIONS
    setCurrentTable,
    setModalStatus,
    addItemToTableOrder,
    deleteItemFromTableOrder
  }

  return (
    <globalContext.Provider value={contextInfo}>
      {children}
    </globalContext.Provider>
  );
};
export default ContextProvider;


// ===============================================
// ** IMPORT THIS USE FUNCTION ANYWHERE IN THE APP
// ** TO ACESS ALL THE GLOBAL CONTEXT 
// ===============================================
// export const CustomGlobalContext = () => {
//   const allContext = useContext(globalContext);
//   return allContext;
// }