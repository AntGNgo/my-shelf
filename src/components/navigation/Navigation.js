import Search from '../search/Search'
import { Link } from "react-router-dom"
import './navigation.css'

const Navigation = () => {
    return(
        <div className="navigation">
            <Link to="/"><h1>My Shelf</h1></Link>
            <Link to='/search'>Search</Link>
            <div className='access'>
                <Link to="/login"><button>Log In</button></Link>
                <Link to='/signup'><button>Sign Up</button></Link>
            </div>

        </div>
    )
}

export default Navigation