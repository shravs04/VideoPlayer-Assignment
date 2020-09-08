import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import classes from './VideoCard.module.css';


const VideoCard = (props) => {

    return( 
        <Link to={`/${props.id}`}  className={classes.PlaylistCard}>       
            <div className={`${classes.PlaylistCard} ${props.id === props.nowPlaying ? classes.Active : null}`}>
            {/* <div className={props.id === props.nowPlaying ? [classes.PlaylistCard, classes.Active].join(' ') : null}> */}
                <img className={classes.Thumbnail} src={props.thumbnail} alt="Video Thumbnail" />
                <h3 className={classes.Title}>{props.title}</h3>
            </div>
         </Link>   
       
    );
}

export default VideoCard;


// {
// }