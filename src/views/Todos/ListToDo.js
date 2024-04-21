import React from "react";
import './ListToDo.scss'
import AddToDo from './AddToDo';
import { ToastContainer, toast } from 'react-toastify';

class ListToDo extends React.Component {
    state = {
        listToDos: [

            { id: '1', title: 'Do homework' },
            { id: '2', title: 'Do housework' },
            { id: '3', title: 'Reading book' },
            { id: '4', title: 'Play game' },

        ],
        editTodo: {}


    }

    addNewToDo = (todo) => {
        this.setState({
            listToDos: [...this.state.listToDos, todo]
        })
        toast.success('Wow so easy')
    }
    handleDeleteToDo = (todo) => {
        console.log('>>>Check delete to do ')
        let currentTodos = this.state.listToDos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listToDos: currentTodos
        })
        toast.success('Delete success')

    }
    handleEditToDo = (todo) => {
        let { editTodo, listToDos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listToDosCopy = [...listToDos];

            //Find index of specific object using findIndex method.
            let objIndex = listToDosCopy.findIndex(item => item.id === todo.id);

            //Log object to Console.
            console.log("Before update: ", listToDos[objIndex])

            //Update object's name property.
            listToDosCopy[objIndex].title = editTodo.title;

            this.setState({
                listToDos: listToDosCopy,
                editTodo: {}

            })
            toast.success('update todo succeed!')
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })


    }
    handleOnChangeEditTodo = (event) => {

        let editTodoCopy = { ...this.state.editTodo };

        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy

        })

    }

    render() {
        let { listToDos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <p>
                    Simple to do app
                </p>
                <div className="List-todo-container">
                    <AddToDo
                        addNewToDo={this.addNewToDo}
                    />
                    <div className="List-todo-content">
                        {listToDos && listToDos.length > 0 &&
                            listToDos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?

                                            <span>{index + 1}-{item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>

                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditToDo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteToDo(item)}
                                        >Delete</button>
                                    </div>
                                )

                            })
                        }



                    </div>




                </div>
            </>
        )


    }
}
export default ListToDo