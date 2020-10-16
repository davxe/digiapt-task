import React from 'react'
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
    render(){
        return (
            <div>            
                <input
                    type='text' 
                    name='title'
                    value={this.state.title} 
                    onChange={this.handleChange} 
                    placeholder='form title' 
                />
                <input 
                    type='text'
                    name='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder='form description'
                    required
                />
            </div>
        )
    }
}
export default Header