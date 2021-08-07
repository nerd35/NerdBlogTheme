import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeScreen, SinglePost } from "./Screens";
import { Footer, Header, Newsletter } from "./components";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app-content-section">
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/single_post" component={SinglePost}/>
        </Switch>
        </div>
        <Newsletter/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
