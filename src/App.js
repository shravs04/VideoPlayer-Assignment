import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import VideoCard from './VideoCard/VideoCard';
import {Route, BrowserRouter, Link, Redirect} from 'react-router-dom';
import PlayListCard from './PlaylistCard/PlaylistCard';
import PlayerVideoSection from './PlayerVideoSection/PlayerVideoSection';
import Homepage from './Homepage/Homepage';


class App extends React.Component{


  render(){
      
    return (
      <BrowserRouter>
      <div className={classes.App}>
           <Route path="/:vId" component={Homepage}/>
           <Route exact path="/" render={() => <Redirect to="/1"/>} /> 

      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;