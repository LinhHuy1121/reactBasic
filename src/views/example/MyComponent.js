import React, { Fragment } from 'react';

class MyComponent extends React.Component{

    state = {
        name : 'Linh',
        age : 23

    }
    handleOnChangeName = (event)=>{
        this.setState({
            name: event.target.value
        })
    }
    render(){
        return (
          <Fragment>
            <div className = "First">
                <input value = {this.state.name} type = 'text'
                onChange = {(event)=> this.handleOnChangeName(event)}
                />

              Hello my component! My name is {this.state.name}
            </div>
            <div clasName = ' Second'>
             I'm {this.state.age} years old
            </div>
          </Fragment>
        );
    }

}
export default MyComponent