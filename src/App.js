import React, { Component} from 'react';
import './App.css';
import PiView from './views/PiView';
import WebView from './views/WebView';



class App extends Component {
    render() {
<<<<<<< HEAD
      if (navigator.userAgent.includes('Raspbian')) {
=======
      if (navigator.userAgent === "Mozilla/5.0 (X11; Linux armv7l) AppleWebKit/537.36 (KHTML, like Gecko) Raspbian Chromium/72.0.3626.121 Chrome/72.0.3626.121 Safari/537.36") {
>>>>>>> 2cde2d15e7de7af40c924f9687ae54a73718f692
        return (
          <PiView />
        )
      }
      else {
        return (
          <WebView />
        )
      }
  }
}

export default App;
