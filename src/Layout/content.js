import React from 'react';
import {Col, Button} from 'react-bootstrap'
import _ from 'lodash'

import '../App.css'

export default class PageContent extends React.Component {

    constructor(){
        super();

        this.state = {
            boxes: [],
            colors: ['lightgrey', 'aliceblue', 'antiquewhite', 'azure', 'coral', 'lightgoldenrodyellow']
        }
    }

    createBox(){
        const newBox = this.state.colors[Math.floor((Math.random(100) * 5))];
        let newBoxesArray = this.state.boxes;
        newBoxesArray.push(newBox);
        this.setState({boxes: newBoxesArray})
    }

    render(){
        const Box = ({bColour, cols}) => {
            return (
                <Col md={cols} style={{padding: 0}}>
                    <div className="flex-center" style={{width: '100%', paddingTop: '100%', posistion: 'relative',color: 'white', backgroundColor: bColour}}>
                        <h1>P</h1>
                    </div>
                </Col>
            )
        };

        const cols = (this.state.boxes.length > 9) ? 3 : 4;

        return (
            <div className='container'>
                <Button onClick={this.createBox.bind(this)}>Create</Button>
                <h1>Page Content</h1>
                {
                    _.map(this.state.boxes, (box, i) => {
                        console.log(box);
                        return (<Box key={i} bColour={box} cols={cols}/>)
                    })
                }
            </div>
        )
    }
}
