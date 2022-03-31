import styled from "styled-components";
import { Route } from "react-router-dom";
import Main from "./Main";
import Add from "./Add";
import Edit from "./Edit";
import "./App.css";
import "animate.css";

function App() {
  return (
    <div className="App">
      <Header>
        <img
          src={require("./cat.png")}
          width="50px"
          style={{ marginRight: "10px" }}
        />
        <p class="animate__animated animate__bounce">일본어 단어장</p>
      </Header>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/add" exact>
        <Add />
      </Route>
      <Route path="/edit/:index" exact>
        <Edit />
      </Route>
    </div>
  );
}

const Header = styled.div`
  background: #ff6f61;
  height: 60px;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Cute Font";
  font-size: 40px;
`;

export default App;
