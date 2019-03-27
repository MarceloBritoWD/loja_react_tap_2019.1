import React, { Component } from 'react';
import { LojaContext } from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class DetalheProduto extends Component {
  
  render(){
    return (
      <Col xs={10}>
        <Card className="text-center m-2">
          <Card.Header as="h5">nome</Card.Header>
          <Card.Img variant="top" src={'./s.jpg'} />
          <Card.Body>
            <Card.Title><FormataMoeda valor={2500}/></Card.Title>
            <Button variant="outline-primary" block onClick={() => this.context.comprar(this.props.produto)}>
              Comprar
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

DetalheProduto.contextType = LojaContext;
  
export default DetalheProduto;