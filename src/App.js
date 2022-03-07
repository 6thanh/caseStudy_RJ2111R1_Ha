import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './components/LogIn';
import Products from './components/Products';
import { Edit } from './components/Edit';
import { Delete } from './components/Delete';
import { Add } from './components/Add';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/caseStudy_RJ2111R1_Ha' element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/edit/:productId' element={<Edit />} />
          <Route path='/products/delete/:productId' element={<Delete />} />
          <Route path='/products/add' element={<Add />} />
          {/* <Route path='/employee' element={<Employee />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
