import {Route, Switch} from 'react-router-dom';
import {LoginComponent} from "./components/Login.component";
import {ProfileComponent} from "./components/profile.component";
import {useSelector} from "react-redux";

function App() {
    const store = useSelector(state => {
        console.log(state);
    })

    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'} component={LoginComponent}/>
                <Route exact path={'/profile'} component={ProfileComponent} />
            </Switch>
        </div>
    );
}

export default App;
