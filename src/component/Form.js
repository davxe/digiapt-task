import React from 'react'
import { Container, Form,Row,Col } from 'react-bootstrap'

class QuestionForm extends React.Component{
    constructor(){
        super()
        this.state={
            question:'',
            selection:'',
            multiple:[],
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleAddmultiple=()=>{
        this.setState({multiple:[...this.state.multiple,'']})
    }
    render(){
        console.log('state value',this.state)
        let multiple=this.state.selection==='multiple'&& this.state.multiple.map((item, i) => {  
            return(
                <div key={i}>
                    <Form.Check inline name='radio1' type='radio'/><input type='text' placeholder='Option 1' /><br/>
               </div>
            )
        })
        let checkbox=this.state.selection==='checkbox'&&this.state.multiple.map((item, i) => {
            return(
                <div key={i}>
                    <Form.Check inline name='radio1' type='checkbox' /><input type='text' className='option_item' placeholder='Option 1'/><br/>
                </div>
            )
        })
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
                            (this.state.selection==='shortAnswer')?(
                                <div>
                                    <Row>
                                        <Form.Group controlId='formBasicShortAnswer'>
                                            <Form.Control 
                                                type='text' 
                                                name='shortAnswer'
                                                className='short'
                                                value={this.state.shortAnswer} 
                                                onChange={this.handleChange} 
                                                placeholder='Short answer text' 
                                                size='lg'
                                            />
                                        </Form.Group>
                                    </Row>
                                    
                                </div>
                            ):(this.state.selection==='multiple')?(
                            <div>
                                <Form.Group controlId='formBasicMultiple'>
                                    <Form.Check inline name='radio1' type='radio'/><input type='text' placeholder='Option 1' /><br/>
                                    {multiple}
                                    {
                                        this.state.selection==='multiple' && this.state.multiple.length<4?(<span style={{color:'blue'}}
                                            onClick={this.handleAddmultiple}  
                                            role="button"
                                        > Add option or add Other</span>):''
                                    }
                                </Form.Group> 
                            </div>
                            ):(this.state.selection==='checkbox')?(
                                <div>
                                   <Form.Group controlId='formBasicCheckbox'>
                                        <Form.Check inline name='radio1' type='checkbox' /><input type='text' className='option_item' placeholder='Option 1'/><br/>
                                        {checkbox}
                                        {
                                            this.state.selection==='checkbox' && this.state.multiple.length<4?(
                                                <span style={{color:'blue'}}
                                                    onClick={this.handleAddmultiple}  
                                                    role="button"
                                                > Add option or add Other</span>
                                            ):''
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