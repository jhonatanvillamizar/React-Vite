import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context' 
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Component/Navbar'
import CheckoutSideMenu from '../../Component/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element:  <Home /> },
    { path: '/clothes', element:  <Home /> },
    { path: '/electronics', element:  <Home /> },
    { path: '/forniture', element:  <Home /> },
    { path: '/toys', element:  <Home /> },
    { path: '/others', element:  <Home /> },
    { path: '/my-account', element:  <MyAccount /> },
    { path: '/my-order', element:  <MyOrder /> },
    { path: '/my-orders', element:  <MyOrders /> },
    { path: '/my-orders/last', element:  <MyOrder /> },
    { path: '/my-orders/:id', element:  <MyOrder /> },
    { path: '*', element:  <NotFound /> },
    { path: '/SignIn', element:  <SignIn /> }
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
