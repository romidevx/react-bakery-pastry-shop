import React,{useContext, useState} from 'react';
import { globalContext } from '../../context/GlobalContext';
import './TableOrderItems.css';

function TableOrderItems() {
  const {currentTable, setModalStatus, deleteItemFromTableOrder} = useContext(globalContext);
 
  const totalOrder = (valuesArray) => {
    let total = valuesArray.length < 1
    ? '0.00'
    : currentTable.orderedItems
    .map(item => (item.price * item.qt))
    .reduce((sum,valor) => sum + valor);

    return Intl.NumberFormat({ style: 'currency', currency: 'BRL', minimumFractionDigits: 2}).format(total);
  }

  

  if(!currentTable){
    return <div  style={{textAlign:'center'}}>
              <h3>Click on a table 👆</h3>
          </div>
  }

  return (
    <section className='table__order'>

      <div className="table__order-header">
        <h3>{currentTable.title}</h3>
        <button className='add__item-button'  onClick={setModalStatus}>Add item</button>
      </div>

      {
        <div className="table__order__items">
          <h3>{!currentTable.orderedItems ? 'No items yet' :'Order items'}</h3>
        <div className="order__items">
          {
            // DISPLAY ITEMS FOR EACH TABLE ORDER
            currentTable.orderedItems && currentTable.orderedItems.map(orderItem => 
              <div className="order__item-card" key={orderItem.id}>
                <h5 className='item__title'>{orderItem.qt} {orderItem.title}</h5>

                <h4 className='item__price'>
                  <span>${(orderItem.price * orderItem.qt).toFixed(2)}</span>
                  <span>&nbsp;</span>
                  <button 
                    className='item__delete-button' 
                    onClick={() => deleteItemFromTableOrder(orderItem.id,currentTable.id)} 
                    title='Delete item'>&nbsp;🗑&nbsp;
                  </button>
                </h4>
              </div>
            )
          }
        </div>

        {/* DISPLAY ORDER TOTAL $$ */}
        <div className="order__total">
          <h3 className="total">
            Total: $<span style={{color:'#044e7c',}}>{totalOrder(currentTable.orderedItems)}</span>
          </h3>
        </div>
      </div>
      }
      
    </section>
  )
}

export default TableOrderItems;