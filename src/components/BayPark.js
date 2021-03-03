import React, { Component } from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import { ImageGroup, Image } from 'react-fullscreen-image';
const images = [
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.3.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.4.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.5.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.6.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.7.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.8.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.9.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.10.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.11.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.12.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.13.jpg ',

    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.14.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.15.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.16.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.1.17.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.15.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/BP/BAY_PARK_1.15.2.jpg ',
  ]
class Baypark extends Component {
    render() {
        return (
<div id="work"  className=".col">
<h1 className="workdesc">Bay Park</h1>




<Container fluid>

  <ListGroup className="credits" >
    <ListGroup.Item>Director: Justin Ciccotelli</ListGroup.Item>
    <ListGroup.Item>Director of Photography: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Editor: Justin Ciccotelli</ListGroup.Item>
    <ListGroup.Item>Producer: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Production Design: Leticia Infante and Chazz Williams</ListGroup.Item>
    <ListGroup.Item>Colorist: Aaron Burns</ListGroup.Item>
    <ListGroup.Item>Camera: Sony Venice</ListGroup.Item>
    <ListGroup.Item>Format: X-OCN ST 4K</ListGroup.Item>
    <ListGroup.Item>Aspect Ratio: 1:85</ListGroup.Item>
    <ListGroup.Item>Lenses: Sony CineAlta 4K</ListGroup.Item>
    <ListGroup.Item>Location: Long Island, NY</ListGroup.Item>
    
  </ListGroup>
  <div className="container">
      <ImageGroup>
        <ul className="images">
          {images.map(i => (
            <li key={i}>
              <Image src={i} alt="Bay Park" 
               style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
               }
              }
              />
            </li>
          ))}
        </ul>
      </ImageGroup>
    </div>
));
  
</Container>

</div>

        )}
        
}


export default Baypark;