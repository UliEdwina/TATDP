import React, { Component } from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import { ImageGroup, Image } from 'react-fullscreen-image';

const images = [
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.7.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.10.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.13.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.14.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.22.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.23.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.26.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.26.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.104.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.150.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/SB/SB_1.151.1.jpg ',
  ]

class SleepingBeauty extends Component {
    render() {
        return (
<div id="work"  className=".col">
<h1 className="workdesc workdesc1">Sleeping Beauty</h1>




<Container fluid>

  <ListGroup className="credits" >
    <ListGroup.Item>Director: Gabriela Quiroz</ListGroup.Item>
    <ListGroup.Item>Director of Photography: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Editor: Jessica Mutascio</ListGroup.Item>
    <ListGroup.Item>Producer: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Producer: Bernice Miller</ListGroup.Item>
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
              <Image src={i} alt="Sleeping Beauty" 
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
  )
</Container>

</div>

        )}
        
}


export default SleepingBeauty;