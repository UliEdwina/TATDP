import React, { Component } from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import { ImageGroup, Image } from 'react-fullscreen-image';
const images = [
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.1.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.2.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.4.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.4.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.5.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.6.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.7.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.8.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.8.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.8.3.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.9.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.10.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.13.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.14.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.14.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.15.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.17.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.17.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.17.13.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.17.4.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.17.5.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.17.6.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.19.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.20.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.23.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.23.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.24.1.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.24.2.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.24.3.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.24.4.jpg ',
    'https://tiffpics-183e9.kxcdn.com/TGWGA/TGWGA_1.1.1.jpg ',

   


    
  ]
class Coney extends Component {
    render() {
        return (
<div id="work"  className=".col">
<h1 className="workdesc workdesc1">TGWGW “ Coney Lost Love </h1>




<Container fluid>

  <ListGroup className="credits" >
    <ListGroup.Item>Director: Toni Branson</ListGroup.Item>
    <ListGroup.Item>Director of Photography: Tiffany Armour-Tejada</ListGroup.Item>
    <ListGroup.Item>Producer: Leticia Infante</ListGroup.Item>
    <ListGroup.Item>Production Design: Leticia Infante and Chazz Williams</ListGroup.Item>
    <ListGroup.Item>Colorist: Colorist: Tiffany Armour-Tejada </ListGroup.Item>
    <ListGroup.Item>Camera: Sony F55</ListGroup.Item>
    <ListGroup.Item>Format: TBA</ListGroup.Item>
    <ListGroup.Item>Aspect Ratio: 2:39</ListGroup.Item>
    <ListGroup.Item>Lenses: Sony CineAlta 4K</ListGroup.Item>
    <ListGroup.Item>Location: Brooklyn, NY</ListGroup.Item>
    
  </ListGroup>
));
<div className="container">
      <ImageGroup>
        <ul className="images">
          {images.map(i => (
            <li key={i}>
              <Image src={i} alt="Coney"  style={{
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


export default Coney;