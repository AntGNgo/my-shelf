import SignupForm from '../../components/signupForm/SignupForm'

const Signup = () => {
    return(
        <div className='is-flex is-flex-direction-column is-align-items-center'>
            <div className="mb-6 is-size-3">
                <p>Sign Up</p>
            </div>
            <SignupForm />
        </div>
    )
}

export default Signup