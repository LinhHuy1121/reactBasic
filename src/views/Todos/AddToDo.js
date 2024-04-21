import React from "react";
class AddToDo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })


    }

    handleAddToDo = () => {
        if (!this.state.title) {
            alert('missing title')
            return;
        }
        // alert('click me')
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        }
        this.props.addNewToDo(todo)

    }
    render() {
        let { title } = this.state
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)}
                />
                <button type="button" className="Add"
                    onClick={() => this.handleAddToDo()}
                >Add</button>
            </div>
        )
    }
}
export default AddToDo