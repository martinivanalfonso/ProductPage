import React from "react";
import "./App.css";
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { selectDarkModeText } from './redux/header/header.selector'

import { createGlobalStyle } from 'styled-components'
import HeaderBackground from "./components/header-background/header-background.component";
import HeaderBlock from './components/header-block/header-block.component'
import BodyBlock from './components/body-block/body-block.component'

const GlobalStyle = createGlobalStyle`
body {
  color: ${props => props.darkMode};
}
::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

::-webkit-scrollbar-track-piece  {
  background-color: ${props => props.darkMode};
}

::-webkit-scrollbar-thumb:vertical {
  height: 30px;
  background-color: orange;
}
`
const App = ({ darkMode }) => (
      <div>
        <GlobalStyle darkMode={darkMode} />
        <HeaderBackground />
        <HeaderBlock />
        <BodyBlock />
      </div>
    );
const mapStateToProps = createStructuredSelector({
  darkMode: selectDarkModeText,
})

export default connect(mapStateToProps)(App);
