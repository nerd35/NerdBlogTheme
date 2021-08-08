import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeScreen, LoginScreen, RegisterScreen, SinglePost } from "./Screens";
import { Footer, Header, Newsletter, NotFound } from "./components";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app-content-section">
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/single_post" component={SinglePost}/>
          <Route exact path="/not_found" component={NotFound}/>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
        </Switch>
        </div>
        <Newsletter/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
