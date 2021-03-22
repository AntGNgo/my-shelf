import { useState } from 'react'

import Navigation from './components/navigation/Navigation'
import Search from './components/search/Search'
import SearchResult from './components/searchResult/SearchResult'
import './App.css';

const App = () => {
  const [searchList, setSearchList] = useState([])
  
  const setList = (results) => {
    setSearchList(results)
  }

  const searchedBooksList = searchList.map((book) => {
    return(
     <SearchResult bookInfo={book} />
    )
  })

  return (
    <div>
      <Navigation />
      <Search setList={setList} />
      {searchedBooksList}
    </div>
  )
}

export default App;
