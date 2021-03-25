
import { Fragment, useState } from 'react'
import SearchedBooksList from '../../components/searchedBooksList/SearchedBooksList'
import Search from '../../components/search/Search'

const SearchPage = ({ setSearchList, searchList }) => {
    return (
        <div>
            <Search setSearchList={setSearchList} />
            <SearchedBooksList searchList={searchList} />
        </div>
        
    )
}

export default SearchPage