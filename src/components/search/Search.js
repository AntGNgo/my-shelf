import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"

const Search = ({ setSearchList }) => {
    let history = useHistory()

    const [query, setQuery] = useState("")

    const onChange = (e) => {
        let queryString = e.target.value.replace(/ /g, '+')
        setQuery(queryString)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`)
        .then((results) => {
            console.log(results)
            const searchResults = results.data.items
            setSearchList(searchResults)
        })
        history.push('/search')
    }
    return(
        <form className="field is-grouped" onSubmit={onSubmit}>
            <div className="control is-expanded">
                <input type="text" className="input" placeholder='Search by Title or Author' onChange={onChange} />
            </div>
            <div className="control">
                <input type='submit' className="button is-primary" value='Search' />
            </div>
        </form>
        
    )
}

export default Search

// 6678678