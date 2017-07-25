import React, {Component} from 'react';

// import PlayListItem
import PlayListItem from './PlayListItem.js';

export default class PlayList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };

    // always use bind when making new methods because otherwise the scope for "this" will be confused
    this._updatePlayList = this._updatePlayList.bind(this);
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlistingjenkins').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }

  // create a method and attach it to a button in the DOM
  // this is refreshing the page when the update list is pulled because it is reupdating the list AFTER you submit the new song
    _updatePlayList(event){
      event.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlistingjenkins').then(results => {
            return results.json();
          }).then(data => {
            this.setState({ songs: data });
            console.log("state", this.state.songs);
          });
  }

// map over the songs array from above and assigning song to props
// then returning a div for every song.

  render(){
    let songs = this.state.songs.map(function(song, index){
      return <PlayListItem key={index} song={song} />
    });
    // onClick this._updatePlayList is saying when the button is clicked
    // the updatePlaylist function will run
      return(
        <div>
          <input type='button' className="btn btn-default" value='Update Playlist' onClick={this._updatePlayList} />
          { songs }
        </div>
        )

}


}






// //copy and paste into componentDidMount in your PlayList component.
// fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
//       return results.json();
//     }).then(data => {
//       this.setState({songs: data});
//       console.log("state", this.state.songs);
//     });
