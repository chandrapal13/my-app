import React,{Component} from 'react';

import {dumpLogs} from './utils';
//import './BlogCard.css';
import classes from './BlogCard.Module.css';

class BlogCard extends Component {
    state = {
        LikeCount:0
    }

    onLikeBtnClick = () => {
        this.setState((prevState, prevProps) => {
        return {LikeCount : prevState.LikeCount +1}
        });
    }

render(){


    dumpLogs(this.props);
return (


    <div className={classes.NewBlogCard}>
         
         <h3>{this.props.title}</h3>
         <p>{this.props.description}</p>
         <p>Like Count:<span className={classes.LikeCount}>{this.state.LikeCount}</span></p>
             <button onClick={this.onLikeBtnClick}>Like</button>
    </div>

)
}


}



export default BlogCard;