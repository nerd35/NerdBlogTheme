import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeScreen } from "./Screens";
import { Footer, Header, Newsletter } from "./components";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
        </Switch>
        <Newsletter/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
