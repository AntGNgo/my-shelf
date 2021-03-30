const SignupForm = () => {
    return(
        <div className="columns is-centered">
            <form className='box p-6'>
                <div className="field">
                    <label className="label">New Username</label>
                    <input type="text" className="control"/>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <input type="password" className="control"/>
                </div>
                <div className="field">
                    <label className="label">Confirm Password</label>
                    <input type="password" className="control"/>
                </div>
                <div className="field">
                    <button className="button is-dark">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm