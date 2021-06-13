import {Redirect, Route, Switch} from 'react-router-dom';
import {useContext} from "react";
import {authPages, publicPages} from "../Routes";
import {Context} from "../index";
import {MAIN_ROUTE} from '../path/PathConst';

    const AppRouter = () => {
        const {user} = useContext(Context);
        return(
            <Switch>
                {user.checkAuth && authPages.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact />
                )}

                {publicPages.map(({path, Component}) =>
                    <Route key={path} path={path} component={Component} exact/>
                )}
                <Redirect to={MAIN_ROUTE}/>
            </Switch>
        )
    }
export default AppRouter;