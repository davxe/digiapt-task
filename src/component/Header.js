import React from 'react'
import {Form, Container, Card} from 'react-bootstrap'
class Header extends React.Component{
    constructor(){
        super()
        this.state={
            title:'',
            description:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            description:this.state.description
        }
        console.log('form data',formData)
    }
    render(){
        return (
            <div className='mt-5'>
                <Container>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId='formBasicTitle'>
                                <Form.Control 
                                    type='text' 
                                    name='title'
                                    value={this.state.title} 
                                    onChange={this.handleChange} 
                                    placeholder='form title' 
                                    size='lg'
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId='formBasicDescription'>
                                <Form.Control 
                                    type='text'
                                    name='description'
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    placeholder='form description'
                                    required
                                />
                            </Form.Group>
                        </Form>
                </Container>
            </div>
        )
    }
}
export default Header