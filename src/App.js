import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Inventory from "./components/Inventory/Inventory";
import OrderReview from "./components/OrderReview/OrderReview";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import NotFound from "./components/NotFound/NotFound";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Shop></Shop>
            </Route>
            <Route exact path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/review'>
              <OrderReview></OrderReview>
            </Route>
            <Route path='/inventory'>
              <Inventory></Inventory>
            </Route>
            <Route path='/place'>
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
