import { useState } from 'react'

import Navigation from './components/navigation/Navigation'
import Search from './components/search/Search'
import SearchResult from './components/searchResult/SearchResult'
import './App.css';

const App = () => {
  const [searchList, setSearchList] = useState([])

  const searchedBooksList = searchList.map((book) => {
    return(
        <SearchResult bookInfo={book} />
    )
  })

  return (
    <div>
      <Navigation setSearchList={setSearchList} />
      <Search setSearchList={setSearchList} />
      <div className="results-container">
        {searchedBooksList}
      </div>
    </div>
  )
}

export default App;
