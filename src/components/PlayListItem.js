import React, {Component} from 'react';


export default class PlayListItem extends Component{
  render(){
    // console.log('song', this.props.song);
    return(
    <div className="form-group">
      <p>Username: {this.props.song.userName}</p>
      <p>Artist/Band: {this.props.song.songArtist}</p>
      <p>Title: {this.props.song.songTitle}</p>
      <p>Notes: {this.props.song.songNotes}</p>
    </div>
    )
  }
}
