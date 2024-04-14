import React, { Fragment } from 'react';

class MyComponent extends React.Component {
  //state
  state = {
    firstName: '',
    lastName: ''
  }
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault() // giup cho web ko bi tai lai
    alert('click me!')
    console.log('>>>Check data input:', this.state)

  }




  render() {
    return (
      <Fragment>
        <div> Hello from html</div>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => { this.handleChangeFirstName(event) }}
          />

          <br />
          <label htmlFor="lname">Last name:</label><br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => { this.handleChangeLastName(event) }}
          />
          <br></br>
          <input
            type="submit"
            value='Submit'
            onClick={(event) => { this.handleSubmit(event) }}
          />

        </form>
      </Fragment>
    );
  }

}
export default MyComponent