import React from 'react';
import {useSelector} from "react-redux";

export const ProfileComponent = () => {
    const user = useSelector(state => state);

    React.useEffect(() => {
        if (!user?.login) {
            window.location.href = '/';
        }
    })


    return(<div>
        <h1>{user.login}</h1>
    </div>)

}
