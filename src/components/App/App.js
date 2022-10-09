import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from'../Details/Details';

function App() {
  return (
    <div className="App">

      <Router>  
      <h1>The Movies Saga!</h1>
      
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
       <Route exact path="/details/:id">
          <Details/>
       </Route>


        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
