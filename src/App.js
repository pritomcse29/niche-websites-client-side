import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvide/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard/DashBoard';

import AddUser from './Pages/AddUser/AddUser';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import Users from './Pages/Users/Users';
import OrderReview from './Pages/OrderReview/OrderReview';
import AllReview from './Pages/AllReview/AllReview';
import AddReview from './Pages/AddReview/AddReview';
import Review from './Pages/Review/Review';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>

            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/reviewsss">
              <Review></Review>
            </Route>


            <PrivateRoute exact path="/users">
              <Users></Users>
            </PrivateRoute>
            <Route path="/users/add">
              <AddUser></AddUser>
            </Route>

            <Route path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </Route>

            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
