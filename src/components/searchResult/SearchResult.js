
const SearchResult = ({ bookInfo }) => {
    console.log(bookInfo)
    return(
        <div className='column card'>
            <img src={bookInfo.volumeInfo.imageLinks['smallThumbnail']} alt='cover' className='card-image' />
            <p className='is-size-3'>{bookInfo.volumeInfo.title}</p>
            <p className=''>{bookInfo.volumeInfo.authors ? bookInfo.volumeInfo.authors[0] : null}</p>
            <p>{bookInfo.volumeInfo.publishedDate}</p>
        </div>
    )
}

export default SearchResult