import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './FirestoreConfig';
// import ClientName from './Components/ClientName';
// import FirebaseName from './Components/FirebaseNames';

// import Almuerzo from './Components/Almuerzo';
// import Menu from './Components/Menu';
// import Header from './Components/Header';



class App extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('boards');
        this.unsubscribe = null;
        this.state = {
        boards: []
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
        <div class="container">
        <div class="panel panel-default">
        <div class="panel-heading">
        <h3 class="panel-title">
            Pedidos Cocina(app)
        </h3>
        </div>
        <div class="panel-body">
        <h4><Link to="/create">Nuevo Pedido</Link></h4>
        <table class="table table-stripe">
            <thead>
            <tr>
                <th>Nombre del Cliente</th>
                <th>Description</th>
                <th>Author</th>
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
    </div>
    </div>

            // <div className='App'>
            //     <header className='App-header'>
            //     <Header/>
                // </header>
                // <div>
                // <ClientName/>
                // <FirebaseName/> 
                // </div>
                // <div className="body">
                // <div class="">
                // </div>
                // <Menu/>
                    // {/* <Desayuno/> */}
                    // {/* <Almuerzo/>
                    //  */}
                // </div>
            // </div>
        )
    }
}

export default App;