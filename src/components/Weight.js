
import React, { Component } from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import { ImageGroup, Image } from 'react-fullscreen-image';
const images = [
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.1.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.6.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.7.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.15.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.33.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.37.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.48.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.57.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.68.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.73.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.80.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.81.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.106.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.107.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/weight/weight_1.110.1.jpg ',

  

    
  ]
class Weight extends Component {
    render() {
        return (
<div id="work"  className=".col">
<h1 className="workdesc">Weight</h1>




<Container fluid>

  <ListGroup className="credits" >
    <ListGroup.Item>Director: Edward Varnie</ListGroup.Item>
    <ListGroup.Item>Director of Photography: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Editor: Justin Ciccotelli</ListGroup.Item>
    <ListGroup.Item>Producer: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Production Designer: Vicki Bugbee</ListGroup.Item>
    <ListGroup.Item>Editor: Mosley</ListGroup.Item>
    <ListGroup.Item>Colorist: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Camera: Sony Venice</ListGroup.Item>
    <ListGroup.Item>Format: X-OCN 4K</ListGroup.Item>
    <ListGroup.Item>Aspect Ratio: 1:85</ListGroup.Item>
    <ListGroup.Item>Lenses: CineAlta 4K</ListGroup.Item>
    <ListGroup.Item>Location: Brooklyn, NY</ListGroup.Item>
    
  </ListGroup>
));
 
</Container>
<div className="container">
      <ImageGroup>
        <ul className="images">
          {images.map(i => (
            <li key={i}>
              <Image src={i} alt="weight"  style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
               }
            }/>
            </li>
          ))}
        </ul>
      </ImageGroup>
    </div>
</div>

        )}
        
}


export default Weight;