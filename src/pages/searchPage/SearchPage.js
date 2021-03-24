
import { Fragment, useState } from 'react'
import Search from '../../components/search/Search'
import SearchedBooksList from '../../components/searchedBooksList/SearchedBooksList'

const SearchPage = () => {
    const [searchList, setSearchList] = useState([])

    return (
        <Fragment>
            <Search setSearchList={setSearchList} />
        </Fragment>
        
    )
}

export default SearchPage