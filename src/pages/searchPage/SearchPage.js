
import { Fragment, useState } from 'react'
import SearchedBooksList from '../../components/searchedBooksList/SearchedBooksList'
import Search from '../../components/search/Search'

const SearchPage = ({ setSearchList, searchList }) => {
    return (
        <div className='container'>
            <p className='is-size-2'>Search for a book</p>
            <Search setSearchList={setSearchList} />
            <SearchedBooksList searchList={searchList} />
        </div>
        
    )
}

export default SearchPage