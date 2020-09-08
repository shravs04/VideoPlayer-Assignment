import React from 'react';
import classes from './PlayerVideoSection.module.css';
import axios from 'axios';


class PlayerVideoSection extends React.Component{
    state = {
        videoData: {},
        isLiked: false,
        isSaved: false
    }

    componentDidMount(){
        // const videoId = this.props.match.params.vId;
       axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/1`)
       .then(response => {
           console.log(response.data);
           this.setState({videoData: {...response.data}});
       })
       .catch(err => {
           console.log("Call Failed");
       })
    };
    

    componentDidUpdate(){
        const videoId = this.props.videoId;
        if(videoId !== this.state.videoData.id){
            axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`)
            .then(response => {
                console.log(response.data);
                this.setState({videoData: {...response.data}});
                window.scrollTo(0,0);
            })
            .catch(err => {
                console.log("Call Failed");
            })
        }
        
    };


    render(){
        return(
            <div className={classes.PlayerWrapper}>
                     <iframe className={classes.VideoPlayer} src={`https://player.vimeo.com/video/${this.state.videoData.vimeoId}`} frameBorder="0" webkitallowfullscreen mozallowfullscreen></iframe>
                     <div className={classes.VideoDesc}>
                        <p><span className={classes.ViewsCount}>{this.state.videoData.views}</span>views</p> 
                        <div className={classes.innerDiv}>  
                        {/* //this.state.videoData.isLiked ? classes.Yellow : null} */}
                             
                             <i className={this.state.videoData.isLiked === true || this.state.videoData.isLiked === 'true' ? ["far", "fa-heart", classes.Yellow].join(' ') : null}></i>
                             <i className="far fa-comment-alt"></i>
                             <i className={this.state.videoData.isSaved === true || this.state.videoData.isSaved === 'true' ? ["far", "fa-bookmark", classes.Yellow].join(' ') : null}></i>
                             
                                                                            
                        </div>
                     </div>
                     <h3 className={classes.VideoTitle}>{this.state.videoData.title}</h3>
                     <p className={classes.VideoDescription}>{this.state.videoData.description}</p>
            </div>
        );
    }

}

export default PlayerVideoSection;