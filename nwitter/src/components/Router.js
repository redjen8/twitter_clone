import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigaton from "./Navigation";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Navigaton/>}
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/profile">
                        <Profile/>
                    </Route>
                    </>
                ) : (
                    <Route exact path ="/">
                        <Auth />
                    </Route>
                )}
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};

export default AppRouter;