import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar' 
export default class App extends Component {
  state={
    progress:10
  }
  setProgress = (progress) => {
    this.setState({progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar 
        color='#f11946'
        progress={this.state.progress}
        />
        <Switch>
          <Route exact path="/business"><News setProgress={this.setProgress}  key="business" PageSize={8} country="gb" category="business" /></Route>
          <Route exact path="/health"><News setProgress={this.setProgress}  key="health" PageSize={8} country="gb" category="health" /></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress}  key="sports" PageSize={8} country="gb" category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress}  key="technology" PageSize={8} country="gb" category="technology" /></Route>
          <Route exact path="/"><News setProgress={this.setProgress}  key="general" PageSize={8} country="gb" category="general" /></Route>
          <Route exact path="/general"><News setProgress={this.setProgress}  key="general" PageSize={8} country="gb" category="general" /></Route>
          <Route exact path="/science"><News setProgress={this.setProgress}  key="science" PageSize={8} country="gb" category="science" /></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress}  key="entertainment" PageSize={8} country="gb" category="entertainment" /></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}