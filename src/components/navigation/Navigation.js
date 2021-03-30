import { Link } from "react-router-dom"

const Navigation = () => {
    return(
        <div className="section">
            <div className="navbar">
                <div className="navbar-brand">
                    <Link to="/"><h1 className='is-size-2 has-text-black'>My Shelf</h1></Link>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link to='/search'><p className='button is-primary mr-6'>Search</p></Link>
                        <Link to="/login"><p className='button is-dark ml-6'>Log In</p></Link>
                        <Link to='/signup'><p className='button is-link ml-2'>Sign Up</p></Link>
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default Navigation