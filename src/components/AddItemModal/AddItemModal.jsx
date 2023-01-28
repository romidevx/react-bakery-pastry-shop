import React,{useContext, useState} from 'react';
import { globalContext } from '../../context/GlobalContext';

import './AddItemModal.css';


function AddItemModal() {

  const {menuItems,addItemToTableOrder,setModalStatus} = useContext(globalContext);
  const [filteredItem,setFilteredItem] = useState({});
  const [quant,setQuant] = useState(null)

  const handleItemClick = (id) => {
    let foundItem = menuItems.find(menuItem => menuItem.id == id)
    setFilteredItem(foundItem)
  }

  const addNewItem = () => {
    let newMenuItem = { ...filteredItem, qt:quant}
    addItemToTableOrder(newMenuItem);
  }

  return (
    <section className='add__item-modal'>
      <div className='modal'>
        <h3>Add item</h3>

        <div className="menu__items">
          {
            menuItems.map(eachItem => 
              <div className="menu__item" key={eachItem.id}>
                <h5 className='menu_item' onClick={() => handleItemClick(eachItem.id)}>
                  {eachItem.title}
                </h5> 
              </div> 
            )
          }
        </div>

        <h3 className='item__toAdd-title'>{!filteredItem.title ? 'Choose item' : filteredItem.title}</h3>

        <div className="item__toAdd-quantidy">
          <form>
            <label htmlFor="quantidy">Enter quantidy</label>
            <input type="number" id='quantidy' name='quantidy' placeholder='ex: 1, 2' onChange={(e) => setQuant(e.target.value)}/>
          </form>
        </div>


        <button className='add__button'    onClick={addNewItem}>Add </button>
        <button className='cancel__button' onClick={setModalStatus}>Cancel</button>

      </div>
    </section>
  )
}

export default AddItemModal;