import './MyCourse.css'
import edit from '../../img/edit.svg'

export default function Course() {
  return (
    <div className='course'>
      <div className="top"></div>
      <div className="bottom">
        <div className="left">Test</div>
        <div className="right"><img src={edit} alt ="favourite button"/></div>
      </div>
    </div>
  )
}