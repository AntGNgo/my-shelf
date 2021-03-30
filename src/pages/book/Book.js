import { useState, useEffect } from 'react'
import axios from 'axios'

const Book = ({ match: { params: { id } } }) => {
    const [book, setBook] = useState({})

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`).then(({ data }) => {
        setBook(data)    
        console.log(book)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    


    return(
        <div>
            <h1>Hello There. Just testing things out</h1>
        </div>
    )
}

export default Book

// "p1MULH7JsTQC"