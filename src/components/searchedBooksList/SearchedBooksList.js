import SearchResult from '../searchResult/SearchResult'

const SearchedBooksList = ({ searchList }) => {
    return(
        searchList.map((book) => {
            return(
                <SearchResult bookInfo={book} />
            )
        })
    )
}


export default SearchedBooksList