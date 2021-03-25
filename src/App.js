import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import Home from './pages/home/Home'
import SearchPage from './pages/searchPage/SearchPage'
import Shelf from './pages/shelf/Shelf'
import Login from './pages/login/Login'
import './App.css';

const App = () => {
  const [searchList, setSearchList] = useState([])

  return (
    <Router>
        <Navigation />
      
      <Switch>
        <Route exact path='/'>
          <Home setSearchList={setSearchList}/>
        </Route>
        <Route exact path='/search'>
          <SearchPage searchList={searchList}/>
        </Route>
        <Route exact path='/shelf' component={Shelf} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/search' component={SearchPage} />
      </Switch>
      
    </Router>
  )
}

export default App;
