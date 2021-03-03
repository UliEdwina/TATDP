import React, { Component } from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import { ImageGroup, Image } from 'react-fullscreen-image';
const images = [
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.1.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.4.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.7.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.7.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.8.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.11.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.13.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.14.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.15.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/MJLove/MJLOVE_1.16.1.jpg ',

    

    
  ]
class Mj extends Component {
    render() {
        return (
<div id="work"  className=".col">
<h1 className="workdesc">Mj Love</h1>




<Container fluid>

  <ListGroup className="credits" >
    <ListGroup.Item>Director: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Director of Photography: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Producer: Leticia Infante</ListGroup.Item>
    <ListGroup.Item>Colorist: Tiffany Armour- Tejada</ListGroup.Item>
    <ListGroup.Item>Camera: Sony F55</ListGroup.Item>
    <ListGroup.Item>Format TBA</ListGroup.Item>
    <ListGroup.Item>aspect ratio : 2:35</ListGroup.Item>
    <ListGroup.Item>Lenses: CineAlta 4K</ListGroup.Item>
    <ListGroup.Item>Location: Brooklyn, NY</ListGroup.Item>
    
  </ListGroup>
));
<div className="container">
      <ImageGroup>
        <ul className="images">
          {images.map(i => (
            <li key={i}>
              <Image src={i} alt="MjLove"  style={{
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


export default Mj;