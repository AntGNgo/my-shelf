import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"
import './search.css'

const Search = ({ setSearchList }) => {
    let history = useHistory()

    const [query, setQuery] = useState("")

    const onChange = (e) => {
        let queryString = e.target.value.replace(/ /g, '+')
        setQuery(queryString)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axios.get(`http://openlibrary.org/search.json?q=${query}`)
        .then((results) => {
            const searchResults = results.data.docs.slice(20)
            setSearchList(searchResults)
        })
        history.push('/search')
    }
    return(
        <form className="field has-addons has-addons-fullwidth" onSubmit={onSubmit}>
            <div className="control">
                <input type="text" className="input" placeholder='Search by Title or Author' onChange={onChange} />
            </div>
            <div className="control">
                <input type='submit' className="button is-primary" />
            </div>
        </form>
        // <form onSubmit={onSubmit} className='search'>
        //     <input type="text" onChange={onChange} className="search__input" placeholder="Search by Title or Author..." />
        //     <input type="submit" value='Search' className="search__submit" />
        // </form>
    )
}

export default Search

// 6678678