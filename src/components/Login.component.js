import React from 'react';
import {useDispatch} from "react-redux";
import { useHistory } from 'react-router-dom'

const RIGHT_LOGIN = 'developer21';
const RIGHT_PASSWORD = '123456';

export const LoginComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = React.useState({
        login: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SET_USER',
            payload: formData
        })

        history.replace('/profile')

    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" name={'login'} onChange={handleChange} value={formData.login} placeholder={'Login'}/>
                </div>

                <div>
                    <input type="password" name={'password'} onChange={handleChange} value={formData.password} placeholder={'Password'}/>
                </div>

               <div>
                   <button disabled={!(formData.login === RIGHT_LOGIN && formData.password === RIGHT_PASSWORD)}>Login</button>
               </div>
            </form>
        </div>
    )
}
