import { Card } from "../Card/Card"

let todos = [
    { id: 1, title: "Estudar React", description: "Hooks, props, componentes..." },
    { id: 2, title: "Montar API Rails", description: "CRUD completo com seeds" },
    { id: 3, title: "Fazer deploy", description: "Subir no Vercel + Railway" }
]

export const Todo = () => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <Card id={todo.id} title={todo.title} description={todo.description} />
                )
            })}
        </div>
    )
}
