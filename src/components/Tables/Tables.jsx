import React from 'react';
import './tables.css';
// CONTEXT
import {useContext} from 'react';
import {globalContext}  from '../../context/GlobalContext';
//import {CustomGlobalContext}  from '../../context/GlobalContext';

function Tables() {
  // CONTEXT 
  const {tables,setCurrentTable} = useContext(globalContext);

  const setTabletoView = (tableId) => {
    setCurrentTable(tableId);
  }

  return (
    <section className='tables'>
      <div className="tables__inner">
      {
        tables.map((table) =>
            <button 
              key={table.id} 
              className='table__card-button'
              onClick={() => setTabletoView(table.id)}>{table.title}
            </button>
        )
      }
      </div>
    </section>
  )
}

export default Tables;