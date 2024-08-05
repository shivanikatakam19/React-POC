import { Formik, Form, ErrorMessage, Field } from "formik"
import { useEffect, useState } from "react"

export default function ToDoList() {

    const [todoList, getTodoList] = useState(
        [])
    useEffect(() => {
        getTodoList([{ id: 1, title: 'Wakeup at 8.00', isCompleted: false },
        { id: 2, title: 'Freshup', isCompleted: false },
        { id: 3, title: 'Eating breakfast', isCompleted: false },
        { id: 4, title: 'Coming to office', isCompleted: false }])
    }, [])

    function changeStatus(event, id) {
        let selectedTodoIndex = todoList.findIndex((todo) => todo.id == id)
        todoList[selectedTodoIndex]['isCompleted'] = event.target.checked
        getTodoList([...todoList])
    }

    function deleteTodo(id) {
        let selectedTodoIndex = todoList.findIndex((todo) => todo.id == id)
        if (selectedTodoIndex != -1) {
            todoList.splice(selectedTodoIndex, 1)
            getTodoList([...todoList])
        }
    }

    return (
        <div>
            <h3>Todo List</h3>
            <div className="row w-100">
                <div className="col-md-6 ps-4">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Is Completed</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.map(task => (
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.title}</td>
                                    <td>{task.isCompleted ? 'Yes' : 'No'}</td>
                                    <td><input type="checkbox" onChange={(event) => changeStatus(event, task.id)} /></td>
                                    <td><button className="btn btn-danger py-0" onClick={() => deleteTodo(task.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <Formik
                        initialValues={{ title: '' }}

                        onSubmit={(values) => {
                            let maxValue = Number.MIN_VALUE;
                            for (let i = 0; i < todoList.length; i++) {
                                if (todoList[i].id > maxValue) {
                                    maxValue = todoList[i].id;
                                }
                            }
                            let newTodo = { id: maxValue + 1, title: values.title, isCompleted: false }
                            getTodoList([...todoList, newTodo])
                        }}

                        validate={(values) => {
                            const errors = {}
                            if (!values.title)
                                errors.title = '* Title is required'
                            return errors;
                        }}
                    >
                        {() => (
                            <Form className="d-grid col-md-3">
                                <label className="text-dark">Title</label>
                                <Field className="mb-2 rounded"
                                    type="text"
                                    name="title"
                                    placeholder="Enter your title"
                                />
                                <ErrorMessage className="text-danger" name="title" component="div" />

                                <button type="submit" >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}