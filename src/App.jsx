import './App.css'
import { useContext } from 'react';
// COMPONENTS
import Header from './components/Header/Header';
import Tables from './components/Tables/Tables';
import TableOrderItems from './components/TableOrderItems/TableOrderItems';
import AddItemModal from './components/AddItemModal/AddItemModal';
import MessageModal from './components/Message/MessageModal';
// CONTEXT
import { globalContext } from './context/GlobalContext';


const App = () => {
  const {showModal,showMessageModal} = useContext(globalContext);
  console.log('message modal: ' , showMessageModal)
  return (
    <div className='app'>

      {/* HEADER */}
      <Header/>

      <main className='container'>

        {/* DISPLAY ALL TABLES */}
        <Tables/>

        {/* SHOW EACH TABLE ORDER*/}
        <TableOrderItems/>
        
      </main>
      
      {/* DISPLAY ADD ITEM MODAL */}
      {showModal && <AddItemModal/>}

      {/* MESSAGE MODAL */}
      {showMessageModal && <MessageModal/>}
      
    </div>

  )
}

export default App
