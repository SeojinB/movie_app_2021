import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";


/*
 * router는 기본적으로 URL을 가져와 확인/비교하고, 
 * 매치가 된다면 우리가 router에게 무엇을 명령했는지에 따라
 * 해당 component를 불러옴
 *  <Route path="/home/introduction">: 두 개의 router가 매치됨
 * path="/"일때만(exact={true}) home을 렌더링 해 줘 = nothing else.
*/
function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
  );
}

export default App;