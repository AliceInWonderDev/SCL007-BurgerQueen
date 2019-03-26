import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../FirestoreConfig';
import { Link } from 'react-router-dom';
import Desayuno from './Desayuno';

class Create extends Component {

constructor() {
super();
this.ref = firebase.firestore().collection('boards');
this.state = {
    client: '',
    description: '',
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
    description: '',
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
            <h4><Link to="/" className="btn btn-primary">Lista de Pedidos</Link></h4>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label for="client">Nombre del Cliente:</label>
                <input type="text" className="form-control" name="client" value={client} onChange={this.onChange} placeholder="Nombre del Cliente" />
                </div>
                <div className="form-group">
                <label for="description">Description:</label>
                
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
                </div>
                <div className="form-group">
                <label for="author">Author:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="Author" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
    </div>
);
}
}

export default Create;