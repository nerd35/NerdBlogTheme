import { BrowserRouter as Router } from "react-router-dom";

import { HomeScreen } from "./Screens";
import { Footer, Header, Newsletter } from "./components";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <HomeScreen />
        <Newsletter/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
