import 'antd/dist/antd.css';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import AddFilms from './Pages/Admin/AddFilms';
import EditFilm from './Pages/Admin/EditFilms';
import Film from './Pages/Admin/Film';
import Checkout from './Pages/Checkout/Checkout';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';
import Loadding from './Pages/Loadding/Loadding';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Register from './Pages/Register/Register';
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
        <Route path='/signup' exact component={SignUp} />
        <HomeTemplate path='/' exact Component={Home} />
        <AdminTemPlate path='/admin' exact Component={Film} />
        <AdminTemPlate path='/admin/addfilm' exact Component={AddFilms} />
        <AdminTemPlate path='/admin/editfilm/:id' exact Component={EditFilm} />


      </Switch>
    </Router>
  )
}
export default App
