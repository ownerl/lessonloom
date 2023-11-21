import './Lesson.css'
import edit from '../../img/edit.svg'

export default function Lesson() {

  return(
      <div className='course'>
      <div className="top"></div>
      <div className="bottom">
        <div className="left">Lesson</div>
        <div className="right"><img src={edit} alt ="favourite button"/></div>
      </div>
    </div>
  );
}