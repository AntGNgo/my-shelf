const LoginForm = () => {
    return(
        <form className='box p-6'>
            <div className="field">
                <label className="label">Username</label>
                <input type="text" className="control"/>
            </div>
            <div className="field">
                <label className="label">Password</label>
                <input type="password" className="control"/>
            </div>
            <div className="field">
                <button className="button is-dark">Log In</button>
            </div>
        </form>
    )
}

export default LoginForm