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
            <div className='question_root'>
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
                                    <Form.Check inline name='radio1' type='radio'/><input type='text'  name='multiple' placeholder='Option 1' value={this.state.multiple} onChange={this.handleChange}/><br/>
                                    <Form.Check inline type='radio' name='radio1'/>
                                    <span 
                                        onClick={this.addSameOption} 
                                        tabIndex={-1} 
                                        role="button"
                                    > Add option or</span>
                                    <span style={{color:"blue"}}
                                        onClick={this.addTextOption}
                                        tabIndex={-2}
                                        role="button"
                                    >
                                        {" "}
                                        add &quot;Other&quot;
                                    </span>
                                </Form.Group> 
                            </div>
                            ):(this.state.selection=='checkbox')?(
                                <div>
                                   <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check inline name='radio1' type='checkbox' /><input type='text' className='option_item' name='checkbox' placeholder='Option 1' value={this.state.checkbox} onChange={this.handleChange}/><br/>
                                        <Form.Check inline type='checkbox' name='radio1' />
                                        <span 
                                            onClick={this.addSameOption} 
                                            tabIndex={-1} 
                                            role="button"
                                        > Add option or</span>
                                        <span style={{color:"blue"}}
                                            onClick={this.addTextOption}
                                            tabIndex={-2}
                                            role="button"
                                        >
                                            {" "}
                                            add &quot;Other&quot;
                                        </span>
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