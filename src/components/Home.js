import React, { Component } from 'react';

import { Player } from 'video-react';



class Home extends Component {
    render() {
        return (
            <div>
          <h1 className="workdesc1 workdesc"> Tiffany's Reel</h1> 
          
           
        
            
              
              <Player className="reel video-react video-react-video">
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"></source>

              
        
          </Player>
        
          
          </div>
      
        )
        
    }
}

export default Home;
