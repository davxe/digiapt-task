import React from 'react'
import { Container, Form,Row,Col } from 'react-bootstrap'

class QuestionForm extends React.Component{
    constructor(){
        super()
        this.state={
            question:'',
            selection:'',
            radioValue:[],
            checkValue:[],
            shortAnswer:'',
            multiple:'',
            checkbox:'',
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        console.log('state value',this.state)
        return(
            <div className='mt-5'>
                <Container>
                    <Form>
                        <Row>
                            <Col md={8}>
                                <Form.Group controlId='formBasicQuestion'>
                                    <Form.Control 
                                        type='text' 
                                        name='question'
                                        value={this.state.question} 
                                        onChange={this.handleChange} 
                                        placeholder='Question' 
                                        size='lg'
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group controlId="answerType">
                                    <Form.Label></Form.Label>
                                    <Form.Control as="select" name='selection' value={this.state.selection} onChange={this.handleChange}>
                                        <option value=''>Select your answer type</option>
                                        <option value='shortAnswer'>Short Answer</option>
                                        <option value='multiple'>Multiple Choice</option>
                                        <option value='checkbox'>Check Boxes</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        {
                            (this.state.selection=='shortAnswer')?(
                                <div>
                                    <Row>
                                        <Col md={8}>
                                            <Form.Group controlId='formBasicShortAnswer'>
                                                <Form.Control 
                                                    type='text' 
                                                    name='shortAnswer'
                                                    value={this.state.shortAnswer} 
                                                    onChange={this.handleChange} 
                                                    placeholder='Short answer text' 
                                                    size='lg'
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    
                                </div>
                            ):(this.state.selection=='multiple')?(
                            <div>
                               <Form.Group controlId='formBasicMultiple'>
                                    <Form.Check inline label='option 1'
                                        type='radio' 
                                        name='multilpe'
                                        value={this.state.multiple} 
                                        onChange={this.handleChange}  
                                        size='lg'
                                        required
                                    />
                                    </Form.Group> 
                            </div>
                            ):(this.state.selection=='checkbox')?(
                                <div>
                                   <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check inline label='option 1'
                                            type='checkbox' 
                                            name='checkbox'
                                            value={this.state.checkbox} 
                                            onChange={this.handleChange}  
                                            size='lg'
                                            required
                                        />{

                                        }
                                        </Form.Group> 
                                </div>
                                ):''
                        }
                    </Form>
                </Container>
            </div>
        )
    }
}
export default QuestionForm