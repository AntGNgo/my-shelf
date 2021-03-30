import LoginForm from '../../components/loginForm/LoginForm'

const Login = () => {
    return(
        <div className='is-flex is-flex-direction-column is-align-items-center'>
            <div className="mb-6 is-size-3">
                <p>Login</p>
            </div>
            <LoginForm />
        </div>
    )
}

export default Login