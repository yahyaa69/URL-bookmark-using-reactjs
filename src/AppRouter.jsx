import React, { useContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Create from './components/Create';
import Update from './components/Update';

const AppRouter = () => {


    // console.log(url);

    
  return (
    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App></App>}/>
                <Route path='create' element={<Create></Create>}/>
                <Route path='update/:id' element={<Update></Update>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter