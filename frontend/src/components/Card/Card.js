import { Trash2 } from 'lucide-react'

import { Checkbox } from "../Checkbox/Checkbox"
import style from "./Card.module.css"
import { update_todo } from '../../api/endpoints';
import { useState } from 'react';

export const Card = ({ id, title, description, deleteTodo, completed }) => {

    const [isChecked, setIsChecked] = useState(completed)

    const handleDelete = async() => {
        await deleteTodo(id)
    };

    const handleComplete = async() => {
        await update_todo(id, !isChecked);
        setIsChecked(!isChecked)
    };

    return (
        <div className={style.card} key={id}>
            <div className={style.leftSide}>
                <Checkbox id={id} checked={isChecked} onClick={handleComplete} />
                <div>
                    <h1 className={style.mainTitle}>{title}</h1>
                    <p className={style.subTitle}>{description}</p>
                </div>
            </div>

            <div className={style.rightSide} onClick={handleDelete}>
                <Trash2 stroke='#F4F6FA' />
            </div>
        </div>
    )
}
