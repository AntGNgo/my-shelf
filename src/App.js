import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import Home from './pages/home/Home'
import SearchPage from './pages/searchPage/SearchPage'
import Book from './pages/book/Book'
import Shelf from './pages/shelf/Shelf'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
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
          <SearchPage searchList={searchList} setSearchList={setSearchList}/>
        </Route>
        <Route exact path='/shelf' component={Shelf} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/search' component={SearchPage} />
        <Route exact path='/book/:id' component={Book} />
      </Switch>
      
    </Router>
  )
}

export default App;
