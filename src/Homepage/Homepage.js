import React, { Component } from 'react';
import classes from './Homepage.module.css';
import PlayListCard from '../PlaylistCard/PlaylistCard';
import PlayerVideoSection from '../PlayerVideoSection/PlayerVideoSection';


export default class Homepage extends Component {
                

    render() {

        console.log(this.props.match.params.vId);
        return (
            <div>
          <p className={classes.Homepage}>Back to Home</p>
          <h1 className={classes.MainHeading}>The Video Player</h1> 
  
           <div className={classes.PlayerSection}>

               <PlayerVideoSection videoId={this.props.match.params.vId}/> 
               {/* <PlayListCard />  */}

               <PlayListCard videoId={this.props.match.params.vId} />
                   
                
            </div>
           </div>
        );
    }
}

