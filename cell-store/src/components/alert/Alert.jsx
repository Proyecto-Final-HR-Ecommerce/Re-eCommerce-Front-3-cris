import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import icon_alert from '../../image/alerta.png'
import { resetError } from '../../redux/actions/userActions'
import style from './Alert.module.css'
const Alert = ({msg}) => {

    const [click, setClick] = useState(false)
    const dispatch = useDispatch()
    const handleOnClick = () => {
        setClick(!click)
        dispatch(resetError())
        
    }

    useEffect(()=> {
        if(click == true) {
            setTimeout(()=> {
                setClick(!click)
            },1000)
        }
    })
  return (
    <div className={click ? style.close : style.alert }>
      <img src={icon_alert} alt='alerta'></img>
      <p><strong>Error </strong>{msg}</p>
      <div><button onClick={handleOnClick}>X</button></div>
    </div>
  )
}

export default Alert
