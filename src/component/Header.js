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
            <div className='root'>            
                <input
                    type='text' 
                    name='title'
                    className='title'
                    value={this.state.title} 
                    onChange={this.handleChange} 
                    placeholder='Form title' 
                />
                <input 
                    type='text'
                    name='description'
                    className='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder='Form description'
                />
            </div>
        )
    }
}
export default Header