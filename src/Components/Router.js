import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../Screens/Home";
import ITBook from "../Screens/ITBook";
import NovelBook from "../Screens/NovelBook";
import Search from "../Screens/Search";
import Detail from "../Screens/Detail";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/it" exact component={ITBook} />
                <Route path="/novel" exact component={NovelBook} />
                <Route path="/:category/:id" component={Detail} />
                <Route path="/search" exact component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
);