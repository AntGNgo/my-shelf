import SearchResult from '../searchResult/SearchResult'

const SearchedBooksList = ({ searchList }) => {
    const listRender = searchList.map((book) => {
        return(
            <div className="column">
                <SearchResult bookInfo={book} />
            </div>
        )
    })

    return(
        <div className="columns">
            {listRender}
        </div>
    )
}


export default SearchedBooksList