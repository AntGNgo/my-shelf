import { useState, useEffect } from 'react'
import axios from 'axios'

const Book = ({ match: { params: { id } } }) => {
    const [book, setBook] = useState({})

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then(({ data }) => {
            setBook(data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    const Book = () => {
        return (
            <div className='container is-flex is-align-items-flex-start'>
            <img src={book.volumeInfo.imageLinks.small ? book.volumeInfo.imageLinks.small : book.volumeInfo.imageLinks.thumbnail} alt=""/>
            <div className="section">
                <p className='is-size-1'>{book.volumeInfo.title}</p>
                <p className='is-size-4'>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : null}</p>
                <p className='is-size-5 mb-5'>{book.volumeInfo.publishedDate.slice(0,4)}</p>
                <div dangerouslySetInnerHTML={{__html: book.volumeInfo.description }} />
                <button className='button is-primary'>Add to My List</button>
            </div>
        </div>
        )
    }


    return(
        <div>
            {book ? <Book /> : null}
        </div>
    )
}

export default Book

// "p1MULH7JsTQC"