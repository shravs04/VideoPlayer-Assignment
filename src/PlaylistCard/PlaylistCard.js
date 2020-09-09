import React from 'react';
import classes from './PlaylistCard.module.css';
import axios from 'axios';
import VideoCard from '../VideoCard/VideoCard';
import { Link } from 'react-router-dom';


class PlayListCard extends React.Component{
    state = {
        Cards: [],
        // id: this.props.videoId
    }

    componentDidMount(){
        axios.get("https://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
        .then(response => {
            console.log(response.data);
            this.setState({Cards: [...response.data]});
        })
        .catch(err => {
            console.log("Call Failed");
        })
    };
    

    render(){

        return(
            // <Link to="/:vId" className={classes.PlaylistWrapper}>
            <div className={classes.PlaylistWrapper}>
                {
                   this.state.Cards.map(item => {
                      return <VideoCard key={item.id} nowPlaying={this.props.videoId} id={item.id} thumbnail={item.thumbnail} title={item.title}/>
                   })
                }
            </div> 
            // </Link>
        );
    }
}

export default PlayListCard;