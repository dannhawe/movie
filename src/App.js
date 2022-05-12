import 'antd/dist/antd.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import './App.css';
import AddFilms from './Pages/Admin/Films/AddFilms';
import EditFilm from './Pages/Admin/Films/EditFilms';
import EditTaskFilms from './Pages/Admin/Films/EditTaskFilms';
import Film from './Pages/Admin/Films/Film';
import AddNguoiDung from './Pages/Admin/Profile/AddNguoiDung';
import Profile from './Pages/Admin/Profile/Profile';
import UpdateNguoiDung from './Pages/Admin/Profile/UpdateNguoiDung';
import Checkout from './Pages/Checkout/Checkout';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import Loadding from './Pages/Loadding/Loadding';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/SignUp';
import { AdminTemPlate } from './Template/AdminTemplate/AdminTemPlate';
import { CheckoutTemplate } from './Template/CheckoutTemplate/CheckoutTemplate';
import { HomeTemplate } from './Template/HomeTemplate/HomeTemplate';
import { LoginTemplate } from './Template/LoginTemplate/LoginTemplate';
// const CheckOutTemplateLazy = lazy(()=> import('./Template/CheckoutTemplate/CheckoutTemplate')) 
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Loadding />
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/Register' exact Component={Register} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />

        <CheckoutTemplate path='/checkout/:id' exact Component={Checkout} />

        <LoginTemplate path='/login' exact Component={Login} />
        <LoginTemplate path='/signup' exact Component={Register} />

        <AdminTemPlate path='/admin' exact Component={Film} />
        <AdminTemPlate path='/admin/profile' exact Component={Profile} />
        <AdminTemPlate path='/admin/addfilm' exact Component={AddFilms} />
        <AdminTemPlate path='/admin/editfilm/:id' exact Component={EditFilm} />
        <AdminTemPlate path='/admin/edittaskfilm/:id' exact Component={EditTaskFilms} />
        <AdminTemPlate path='/admin/profile/add' exact Component={AddNguoiDung} />
        <AdminTemPlate path='/admin/profile/update' exact Component={UpdateNguoiDung} />



        <HomeTemplate path='/' exact Component={Home} />




      </Switch>
    </Router>
  )
}
export default App
