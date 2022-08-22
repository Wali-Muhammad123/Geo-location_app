import {BrowserRouter as Router, Routes, Link,Route } from 'react-router-dom';
import CalculateRoute from './components/CalculateRoute';
import FuzzySearch from './components/FuzzySearch';
import './styles.css';
export default function App(){
return (
  <Router>
    <button class='search_links'>
    <h3 align='center'>
      <Link to='/FuzzySearch' class='links'> Search Location/Address </Link>
    </h3> </button>
    <button class='search_links'>
    <h3 class='header3' align='center'> 
      <Link to='/CalculateRoute' class='links'> Calculate Route Distance </Link>
    </h3></button>
    <Routes>
    <Route path='/FuzzySearch' exact element={<FuzzySearch/>} />
    <Route path='/CalculateRoute' exact element={<CalculateRoute/>} />
  </Routes>
  </Router>
 

);
}