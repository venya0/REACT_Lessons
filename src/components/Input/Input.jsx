import { useState } from 'react'
import style from './Input.module.sass'

export const Input = (props) => {
    const [txt, setName] = useState('string')
    const handleChange = (ev) => {
        setName(ev.target.value)
    }
    return (
        <>
        <p>{txt}</p>
        <input className={style.border} onChange={ev => handleChange(ev)} />
        </>
    )
}