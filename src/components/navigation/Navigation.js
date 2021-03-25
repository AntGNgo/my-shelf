import { Link } from "react-router-dom"
import Search from '../search/Search'

const Navigation = () => {
    return(
        <div className="section">
            <div className="navbar">
                <div className="navbar-brand">
                    <Link to="/"><h1 className='is-size-2 has-text-black'>My Shelf</h1></Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/login"><a className='button is-dark ml-6'>Log In</a></Link>
                        <Link to='/signup'><a className='button is-link ml-2'>Sign Up</a></Link>
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default Navigation