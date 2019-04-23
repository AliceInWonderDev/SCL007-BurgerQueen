import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import firebase from '../FirestoreConfig';
import { Link } from 'react-router-dom';
import Almuerzo from './Almuerzo';
import Desayuno from './Desayuno';
import {Container, Row, Col} from 'react-bootstrap';

class Create extends Component {

constructor() {
super();
this.ref = firebase.firestore().collection('boards');
this.state = {
    client: '',
    description: [],
    author: ''
};
}
onChange = (e) => {
const state = this.state
state[e.target.name] = e.target.value;
this.setState(state);
}

onSubmit = (e) => {
e.preventDefault();

const { client, description, author } = this.state;

this.ref.add({
    client,
    description,
    author
}).then((docRef) => {
    this.setState({
    client: '',
    description: [],
    author: ''
    });
    this.props.history.push("/")
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}

render() {
const { client, description, author } = this.state;
return (
    <div className="container">
    <div className="panel panel-default">
        <div className="panel-heading">
        <h3 className="panel-title">
            Nuevo Pedido
        </h3>
        </div>
        <div className="panel-body">
                <div className="form-group">
                <label for="description"> <h4>Pedido:</h4></label>
                {/* <div>
                    <Menu/>
                </div> */}
                <button className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80">{description} </button>
                <Container>
                    <Row>
                        <Col>
                        {/* <input onChange={this.onChange}/><Almuerzo/>{description}<Desayuno/> */}
                        {/* <input onChange={this.onChange2}/><Desayuno/> */}
                        </Col>
                    </Row>
                </Container>
                </div>

                <div className="form-group">
                <label for="client">Nombre del Cliente:</label>
                <input type="text" className="form-control" name="client" value={client} onChange={this.onChange} placeholder="nombre del cliente" />
                </div>

                <div className="form-group">
                <label for="author">Mesero:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="mesero" />
                </div>
                
                <h4><Link to="/" className="btn btn-primary">Lista de Pedidos</Link></h4>
                <form onSubmit={this.onSubmit}>

                <button type="submit" className="btn btn-success">Enviar</button>
            </form>
        </div>
    </div>
    </div>
);
}
}

export default Create;