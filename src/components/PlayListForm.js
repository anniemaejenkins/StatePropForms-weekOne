import React, {Component} from 'react';

export default class PlayListForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    };
  }
  render(){
    return(
      <div>
      <form>
        <label>Username:</label>
        <input name="username" type="text"/>

        <label>Artist/Band:</label>
        <input name="band" type="text"/>

        <label>Song Title:</label>
        <input name="song" type="text"/>

        <label>Notes about Song:</label>
        <textarea name="notes"/>

        <input name="submit" type="submit"/>

      </form>
      </div>
    );
  }
}
