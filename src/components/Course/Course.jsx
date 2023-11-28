import './Course.css'
import heart from '../../img/Vector.svg'
import { useNavigate } from 'react-router-dom'

export default function Course() {
  const navigate = useNavigate()
  return (
    <div className='course' onClick={() => navigate("/adakldjaldksj")}>
      <div className="top"></div>
      <div className="bottom">
        <div className="left">Test</div>
        <div className="right"><img src={heart} alt ="favourite button"/></div>
      </div>
    </div>
  )
}