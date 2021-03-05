import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Meeting from "./pages/Meeting/Meeting";

function App() {
  const [userName, setUserName] = useState();
  const [meetingId, setMeetingId] = useState();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                userName={userName}
                meetingId={meetingId}
                setUserName={setUserName}
                setMeetingId={setMeetingId}
              />
            )}
          ></Route>
          <Route
            exact
            path="/Meeting"
            render={() => <Meeting userName={userName} meetingId={meetingId} />}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
