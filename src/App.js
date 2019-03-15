import React, {Component} from 'react';
import ClientName from './Components/ClientName';
import './App.css';
import FirebaseName from './Components/FirebaseNames';
import Desayuno from './Components/Desayuno';
import Almuerzo from './Components/Almuerzo';
import Header from './Components/Header';



class App extends Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                <Header/>
                </header>
                <div>
                <ClientName/>
                <FirebaseName/> 
                </div>
                <div className="body">
                    <Desayuno/>
                    <Almuerzo/>
                    </div>
            </div>
        )
    }
}

export default App;