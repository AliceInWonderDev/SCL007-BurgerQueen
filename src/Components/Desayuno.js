import React, {Component} from 'react';
import {desayuno} from '../JSON/desayuno.json';

class Desayuno extends Component{
    constructor(props){
        super(props);
        this.state={
            desayuno,
            toShow: []
        }
        this.comida = this.comida.bind(this);
    }
    comida(){
        this.setState({
            ...this.state,
            toShow: this.state.desayuno.map((food, i)=>{
                return(
                    <div className= 'container'>
                        <div className="row">
                        <div className="col-4">
                            <div className="btn btn-warning">
                            {/* {food.item} 
                            {food.price}*/}
                            </div> 
                        </div>
                        </div>
                    </div>)
            })
        })
    }
    render(){
        return(
        <div>
        <button type="button" className="btn btn-secondary btn-lg btn-block #E7B6E4" onClick={this.comida}>Desayuno</button>
        {this.state.toShow} 
        </div>
        )
    }
}

export default Desayuno;