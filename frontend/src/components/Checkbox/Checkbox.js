import style from "./Checkbox.module.css"

export const Checkbox = ({ id = 'checkbox-id', checked, onClick }) => {
    return (
        <div className={style.checkboxWrapper}>
            <input className={style.inpCbx} id={id} type="checkbox" checked={checked} onClick={onClick} />
            <label className={style.cbx} htmlFor={id}>
                <span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
            </label>
        </div>
    )
}
