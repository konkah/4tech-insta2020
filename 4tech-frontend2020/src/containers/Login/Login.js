import React, { userState, useEffect } from 'react';

const Login = ({ name, age }) => {
    const [login, setLogin] = userState('');

    useEffect(() => {
        console.log('Alterei o Login');
        return (() => {
            console.log('terminei mae!');
        })
    }, [login])

    const onLoginChange = (event) => {
        console.log(event.target.value);
        setLogin(event.target.value);
    };

    return (
        <div>
            <input type="text" value={login} onChange={onLoginChange} />
            Login works!!! {name} {age}
        </div>
    )
};

export default Login;