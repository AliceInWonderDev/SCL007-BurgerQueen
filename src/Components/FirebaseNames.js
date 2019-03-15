import React, { Component } from 'react';
import db from '../FirestoreConfig';


class FirebaseNames extends Component {
    
    state = {
        item:[]
    }
    componentDidMount(){
        db.collection('Name').onSnapshot((snapShots)=>{
            this.setState({
                item:snapShots.docs.map(doc =>{
                    return console.log(doc.data())
            })    
        })
        })
    }
    
    render(){
        return(
            <div>

            </div>
        )
    }  
}
export default FirebaseNames