import React, { Component } from 'react';
import firebase from '../FirestoreConfig';
import { Link } from 'react-router-dom';
import Logo from '../Components/Logo';


class Edit extends Component {

constructor(props) {
super(props);
this.state = {
    key: '',
    client: '',
    description: '',
    author: ''
};
}

componentDidMount() {
const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
ref.get().then((doc) => {
    if (doc.exists) {
    const board = doc.data();
    this.setState({
        key: doc.id,
        client: board.client,
        description: board.description,
        author: board.author
    });
    } else {
    console.log("No such document!");
    }
});
}

onChange = (e) => {
const state = this.state
state[e.target.name] = e.target.value;
this.setState({board:state});
}

onSubmit = (e) => {
e.preventDefault();

const { client, description, author } = this.state;

const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
updateRef.set({
    client,
    description,
    author
}).then((docRef) => {
    this.setState({
    key: '',
    client: '',
    description: '',
    author: ''
    });
    this.props.history.push("/show/"+this.props.match.params.id)
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
}

render() {
return (
    <div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">
        <div>
            <Logo/>
        </div>
        <h3 class="panel-title">
            EDIT BOARD
        </h3>
        </div>
        <div class="panel-body">
        <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Board List</Link></h4>
        <form onSubmit={this.onSubmit}>
            <div class="form-group">
            <label for="client">Nombre del Cliente:</label>
            <input type="text" class="form-control" name="client" value={this.state.client} onChange={this.onChange} placeholder="Nombre del Cliente" />
            </div>

            <div class="form-group">
            <label for="description">Pedido:</label>
            <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
            </div>

            <div class="form-group">
            <label for="author">Mesero:</label>
            <input type="text" class="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="Author" />
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>
        </div>
    </div>
    </div>
);
}
}

export default Edit;