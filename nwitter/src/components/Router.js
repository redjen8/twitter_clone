import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigaton from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigaton/>}
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path="/">
                        <Home userObj = {userObj}/>
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
            </Switch>
        </Router>
    );
};

export default AppRouter;