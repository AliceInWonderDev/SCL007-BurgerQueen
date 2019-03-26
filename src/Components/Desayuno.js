import React, {Component} from 'react';
import {desayuno} from '../JSON/desayuno.json';
import '../CSS/Desayuno.css'

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
                    <div className= 'container btnDesayuno'>
                        <div className="row">
                        <div className="col-6">
                            <div className="btn btn-warning">
                            {food.item}      {""}
                            {food.price} {""}
                            <img src = {food.img}/>
                            </div> 
                        </div>
                        </div>
                    </div>)
            })
        })
    }
    render(){
        return(
            <div className= 'container btnDesayuno'>
            <div className="row">
            <div className="col-6">
                <button type="button" className="btn btn-info btn-lg btn-block" onClick={this.comida}>Desayuno</button>
                {/* {this.state.toShow}  */}
        </div>
        </div>
        </div>
        )
    }
}

export default Desayuno;