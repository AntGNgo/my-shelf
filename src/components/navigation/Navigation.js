import Search from '../search/Search'
import './navigation.css'

const Navigation = () => {
    return(
        <div className="navigation">
            <h1>My Shelf</h1>
            <div className='access'>
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Navigation