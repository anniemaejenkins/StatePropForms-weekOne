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
    this._addToList = this._addToList.bind(this);
    this._handleUsername = this._handleUsername.bind(this);
    this._handleSongArtist = this._handleSongArtist.bind(this);
    this._handleSongTitle = this._handleSongTitle.bind(this);
    this._handleSongNotes = this._handleSongNotes.bind(this);
  }


// setState is changing the state of the items in the state object that is defined
// in the PlayListForm component.
  _handleUsername(event) {
    this.setState({
      userName: event.target.value
    });
  }

  _handleSongArtist(event){
    this.setState({
      songArtist: event.target.value
    });
  }

  _handleSongTitle(event){
    this.setState({
      songTitle: event.target.value
    });
  }

  _handleSongNotes(event){
    this.setState({
      songNotes: event.target.value
    });
  }

  _addToList(event){
    event.preventDefault();
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlistingjenkins", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }
  ).then(response => {
    console.log(response, "yay");

  }).catch(err => {
    console.log(err, "boo!");
  });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }



  render(){
    return(
      // value = this.state.userName is referring to the component at the top
      // and how state is an object and reassigns whatever the value of this input will be
      <div>
      <form onSubmit={this._addToList}>
        <label>Username:</label>
        <input name="username" type="text" value={this.state.userName} onChange={this._handleUsername}/>

        <label>Artist/Band:</label>
        <input name="band" type="text" value={this.state.songArtist} onChange={this._handleSongArtist}/>

        <label>Song Title:</label>
        <input name="song" type="text" value={this.state.songTitle} onChange={this._handleSongTitle}/>

        <label>Notes about Song:</label>
        <textarea name="notes" value={this.state.songNotes} onChange={this._handleSongNotes}/>

        <input name="submit" className="btn btn-default" type="submit"/>

      </form>
      </div>
    );
  }
}
