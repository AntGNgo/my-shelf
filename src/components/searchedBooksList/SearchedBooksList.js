import SearchResult from '../searchResult/SearchResult'

const SearchedBooksList = ({ searchList }) => {
    const listRender = searchList.map((book) => {
        return(
            <div className="card columns is-flex mb-2">
                <div className='column is-one-third p-5'>
                    <img src={book.volumeInfo.imageLinks['smallThumbnail']} alt='cover' className='card-image' />
                    <p className='is-size-3'>{book.volumeInfo.title}</p>
                    <p className=''>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : null}</p>
                    <p>{book.volumeInfo.publishedDate.slice(0,4)}</p>
                </div>
                <div className='column is-align-self-center'>
                    <p>{book.volumeInfo.description}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="">
            {listRender}
        </div>
    )
}


export default SearchedBooksList