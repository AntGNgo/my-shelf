import { useState } from 'react'
import axios from "axios"
import './search.css'

const Search = ({ setList }) => {

    const [query, setQuery] = useState("")

    const onChange = (e) => {
        let queryString = e.target.value.replace(/ /g, '+')
        setQuery(queryString)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.get(`http://openlibrary.org/search.json?title=${query}`)
        .then((results) => {
            const searchResults = results.data.docs.slice(20)
            console.log(searchResults)
            setList(searchResults)
        })

    }
    return(
        <form onSubmit={onSubmit} className='search'>
            <input type="text" onChange={onChange}/>
            <input type="submit" value='Search' />
        </form>
    )
}

export default Search

// 6678678