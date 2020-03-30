import React from "react";
import "./App.css";
import HeaderBackground from "./components/header-background/header-background.component";
import HeaderBackgroundTop from "./components/header-background/header-background-top.component";
import HeaderBlock from './components/header-block/header-block.component'
import BodyBlock from './components/body-block/body-block.component'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderBackgroundTop />
        <HeaderBackground />
        <HeaderBlock />
        <BodyBlock />
      </div>
    );
  }
}

export default App;
