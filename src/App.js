import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Emergency from './Pages/Emergency/Emergency';
import Services from './Pages/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import Doctors from './Pages/Doctors/Doctors';
import DoctorDetails from './Pages/DoctorDetails/DoctorDetails';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Pages/Context/AuthProvider';
import BookAppointment from './Pages/BookAppointment/BookAppointment';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import BookAmbulance from './Pages/BookAmbulance/BookAmbulance';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/emergency'>
              <Emergency></Emergency>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <Route path='/doctorDetails/:docId'>
              <DoctorDetails></DoctorDetails>
            </Route>
            <PrivateRoute exact path='/bookAppointment'>
              <BookAppointment></BookAppointment>
            </PrivateRoute>
            <PrivateRoute path='/bookAmbulance'>
              <BookAmbulance></BookAmbulance>
            </PrivateRoute>
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
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
