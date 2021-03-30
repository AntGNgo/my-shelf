import { Link } from 'react-router-dom'

const SearchedBooksList = ({ searchList }) => {
    const listRender = searchList.map((book) => {
        console.log(book)
        return(
            <Link to={`/book/${book.id}`}>
                <div className="card columns is-flex mb-5">
                    <div className='column is-one-third p-5'>
                        {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks['smallThumbnail']} alt='cover' className='card-image' width='100px' />: null}
                        <p className='is-size-3'>{book.volumeInfo.title}</p>
                        <p className=''>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : null}</p>
                        <p>{book.volumeInfo.publishedDate.slice(0,4)}</p>
                    </div>
                    <div className='column is-align-self-center'>
                        <p>{book.volumeInfo.description ? book.volumeInfo.description : "No description available"}</p>
                    </div>
                </div>
            </Link>
            
        )
    })

    return(
        <div className="mt-5">
            {listRender}
        </div>
    )
}


export default SearchedBooksList

