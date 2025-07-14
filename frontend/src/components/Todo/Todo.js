import { Card } from "../Card/Card"

export const Todo = ({ todos, deleteTodo }) => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <Card key={todo.id} id={todo.id} title={todo.todo_name} description={todo.description} deleteTodo={deleteTodo} completed={todo.completed} />
                )
            })}
        </div>
    )
}
