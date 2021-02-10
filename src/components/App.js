import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import Login from "./pages/Login/Login";
import Movies from "./pages/Movies/Movies";
import Originals from "./pages/Originals/Originals";
import RealityShows from "./pages/RealityShows/RealityShows";
import Registration from "./pages/Registration/Registration";
import TVSeries from "./pages/TVSeries/TVSeries";
import TVShows from "./pages/TVShows/TVShows";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <Registration {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route exact path="/movies" render={(props) => <Movies {...props} />} />
          <Route exact path="/reality_shows" render={(props) => <RealityShows {...props} />} />
          <Route exact path="/tv_series" render={(props) => <TVSeries {...props} />} />
          <Route exact path="/tv_shows" render={(props) => <TVShows {...props} />} />
          <Route exact path="/originals" render={(props) => <Originals {...props} />} />
          <Route exact path="/email_verification" render={(props) => <EmailVerification {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
