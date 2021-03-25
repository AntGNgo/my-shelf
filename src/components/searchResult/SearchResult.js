
const SearchResult = ({ bookInfo }) => {
    console.log(bookInfo)
    return(
        <div>
            <img src={bookInfo.volumeInfo.imageLinks['smallThumbnail']} alt='cover' />
        </div>
    )
}

export default SearchResult