import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Reg from './Pages/Login/Reg/Reg';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddItem from './Pages/AddItem/AddItem';
import Inventory from './Pages/Inventory/Inventory';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import MyItems from './Pages/MyItems/MyItems';
import ManageInventorys from './Pages/Home/ManageInventorys/ManageInventorys.js';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='login' element={<Login />} />
          <Route path='reg' element={<Reg />} />
          <Route path='manage-item' element={<ManageItem />} />
          <Route path='add-item' element={<AddItem />} />
          <Route path='my-item' element={<MyItems />} />
          <Route path='manage-inventories' element={<ManageInventorys />} />
          <Route path='/inventorys/:id' element={<PrivateRoute>
            <Inventory />
          </PrivateRoute>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;