import { useState } from "react"
import style from "./AddCard.module.css"

import { Plus } from 'lucide-react'

export const AddCard = ({addTodo}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAdd = () => {
        addTodo(title, description);
        setTitle(''); // limpando field
        setDescription(''); // limpando field
    }

    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <button onClick={handleAdd}>
                    <Plus stroke="#F4F6FA" className={style.plusIcon} />
                </button>
                <div className={style.texts}>
                    <textarea value={title} onChange={(e) => setTitle(e.target.value)} rows={0} placeholder="insira aqui o título da sua task" className={style.mainTitle} />
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={0} placeholder="escreva uma descrição detalhada do que fazer" className={style.subTitle} />
                </div>
            </div>
        </div>
    )
}
