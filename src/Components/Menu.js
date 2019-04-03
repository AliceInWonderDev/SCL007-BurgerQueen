import React, {Component} from 'react';
import {almuerzo} from '../JSON/almuerzo.json';
import {desayuno} from '../JSON/desayuno.json';
import {Container, Row, Col} from 'react-bootstrap';


class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            desayuno,
            almuerzo,
            toShowD:[],
            toShowA:[]
        }
        this.comidaUno = this.comidaUno.bind(this);
        this.comidaDos = this.comidaDos.bind(this);
    }
    comidaUno(){
        this.setState({
            ...this.state,
            toShowD: this.state.desayuno.map((food, i)=>{
                return(
                <div>
                    <Container>
                    <Row>
                    <div className="btn btn-warning">
                    
                    {food.item}      {""}
                    {food.price} {""}
                    {/* <img src = {food.img}/> */}
                    </div>
                    </Row>
                    </Container> 
                </div>
                )
            })
        })
        let arr = [];
    }
    comidaDos(){
        this.setState({
            ...this.state,
            toShowA: this.state.almuerzo.map((foods, i)=>{
                return(
                <Container>
                    <Row>
                    <div className="btn btn-warning">
                    {foods.item} {""}
                    {foods.price}
                    </div>
                    </Row>
                </Container>  
                )
            })
        })
    }
render(){
    return(
        <div>
            <Container>
                <Row>
                <input type="input" className="btn btn-info btn-lg btn-block" placeholder="Desayuno" onClick={this.comidaUno} onChange={this.onChange}/>
                <Col>
                {this.state.toShowD}
                </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <input type="input" className="btn btn-info btn-lg btn-block" placeholder="Almuerzo" onClick={this.comidaDos} onChange={this.onChange}/>  
                <Col>
                {this.state.toShowA}
                </Col>
                </Row>
            </Container>
        </div>
    )
}
}

export default Menu;