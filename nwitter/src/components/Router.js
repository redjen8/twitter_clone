import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { authService } from "../fbase";

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(authService.currentUser);
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <Route exact path="/">
                        <Home />
                    </Route>
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