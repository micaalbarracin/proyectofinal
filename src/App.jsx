import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Listado de productos'}/>}/>  
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados categoria: '} />}/>

          <Route path= '/item/:itemId' element= {<ItemDetailContainer />} />
          
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
