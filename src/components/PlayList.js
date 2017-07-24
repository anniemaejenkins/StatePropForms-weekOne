import React, {Component} from 'react';

// import PlayListItem
import PlayListItem from './PlayListItem.js';

export default class PlayList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }
  render(){
    // map over the playlist and return a playlist item component
    let individualSong = playlist.map((song) => {
      return(
        <div key={playlist.id}>
          <PlayListItem />
          </div>
        })
    );
  }
}









// //copy and paste into componentDidMount in your PlayList component.
// fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
//       return results.json();
//     }).then(data => {
//       this.setState({songs: data});
//       console.log("state", this.state.songs);
//     });
