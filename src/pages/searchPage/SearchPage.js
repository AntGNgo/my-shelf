
import { Fragment, useState } from 'react'
import SearchedBooksList from '../../components/searchedBooksList/SearchedBooksList'

const SearchPage = ({ searchList }) => {
    return (
        <Fragment>
            <SearchedBooksList searchList={searchList} />
        </Fragment>
        
    )
}

export default SearchPage