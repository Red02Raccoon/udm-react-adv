import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col } from "reactstrap";

import reducers from "./reducers";

import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Signout from "./components/Signout";
import Feature from "./components/Feature";

import "normalize.css";
import "./styles/index.scss";

const store = createStore(
  reducers,
  {
    auth: {
      authenticated: localStorage.getItem("token")
    }
  },
  composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Container>
          <Row>
            <Col>
              <Route path="/" component={Welcome} exact />
              <Route path="/signup" component={Signup} />
              <Route path="/feature" component={Feature} />
              <Route path="/signout" component={Signout} />
              <Route path="/signin" component={Signin} />
            </Col>
          </Row>
        </Container>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
