


const SignUp = () => {
    return(
        <div>
            <h1 className="signUp welcome">Welcome To a Clone</h1>
            <div className="signUp-Div container center">
                <p className="centerText bolder">Welcome back</p>
                <form className="signIn-Form">
                    <label className="formLabel">Email:</label><br></br>
                    <input className="formInp" type='email'></input>
                    <br></br>
                    <label className="formLabel">Password:</label><br></br>
                    <input className="formInp" type='password'></input>
                </form>
                <div className="centerText paddingTop">
                    <p>New to Movie Clone?</p>
                    <a className="newAcc" href="www.google.com">Create New Account!</a>
                </div>
            </div>
        </div>
    )
}

export default SignUp