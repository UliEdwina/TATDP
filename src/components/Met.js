import React, { Component } from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import { ImageGroup, Image } from 'react-fullscreen-image';
const images = [
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.3.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.4.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.5.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.6.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.7.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.8.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.9.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.10.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.1.11.jpg ',
    'https://tiffpics-183e9.kxcdn.com/met/Untitled_1.3.1.jpg ',

    
  ]
class Met extends Component {
    render() {
        return (
<div id="work"  className=".col">
<h1 className="workdesc">Marble Eye Tanner</h1>




<Container fluid>

  <ListGroup className="credits" >
    <ListGroup.Item>Director: Harry Lennix</ListGroup.Item>
    <ListGroup.Item>Director of Photography: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Producer: Gheree O’Bannon</ListGroup.Item>
    <ListGroup.Item>Colorist: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Camera:  Alexa Mini</ListGroup.Item>
    <ListGroup.Item>Format: Pro Res 4444 UHD Log-C</ListGroup.Item>
    <ListGroup.Item>Aspect Ratio: 1:85</ListGroup.Item>
    <ListGroup.Item>Lenses: Sony CineAlta 4K</ListGroup.Item>
    <ListGroup.Item>Location: Brooklyn, NY</ListGroup.Item>
    
  </ListGroup>
));
<div className="container">
      <ImageGroup>
        <ul className="images">
          {images.map(i => (
            <li key={i}>
              <Image src={i} alt="Marble Eye Tanner"  style={{
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
</Container>

</div>

        )}
        
}


export default Met;