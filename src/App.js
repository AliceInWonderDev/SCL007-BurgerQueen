import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './FirestoreConfig';
import Logo from './Components/Logo';
import Create from './Components/Create';
import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('boards');
        this.unsubscribe = null;
        this.state = {
        boards: [],
        description:[] //nuevo
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
        const { client, description, author } = doc.data();
        boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        client,
        description,
        author,
        });
    });
    this.setState({
        boards
    });
    }

    componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }


    render() {
        return (
    <div>
        <Container>
            
            <div>
                <Logo/>
            </div>
        <Row>
        <Col>
            <Create/>
        </Col>
        <Col>        
        <h3 className="panel-title">
            Pedidos Cocina
        </h3>
    
        <div className="panel-body">
        <h4>
        {/* <Link to="/create"> */}
        Nuevo Pedido
        {/* </Link> */}
        </h4>
        <table className="table table-stripe">
            <thead>
            <tr>
                <th>Nombre del Cliente</th>
                <th>Pedido</th>
                <th>Mesero</th>
            </tr>
            </thead>
            <tbody>
            {this.state.boards.map(board =>
                <tr>
                <td><Link to={`/show/${board.key}`}>{board.client}</Link></td>
                <td>{board.description}</td>
                <td>{board.author}</td>
                </tr>
            )}
            </tbody>

        </table>
        </div>
        </Col>
        </Row>
        </Container>
    </div>
        )
    }
}

export default App;