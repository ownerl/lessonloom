import './LessonSetUp.css'

export default function LessonSetUp() {

  return (
    <form className="lessonSetUp" action="">
      <div className="top-half">
        <div className="left-side">
          <input placeholder="Lesson Title" />
          <input className='description' placeholder="Decription" />
        </div>
        <div className="right-side">
          <div className="youtube">
            
          </div>
          <input type="text" className="url" placeholder="Insert Youtube URL"/>
        </div>
      </div>
      <div className="bottom-half">
        <input className="task" type="text" placeholder="Post Lesson Task"/>
        <input className="notes" type="text" placeholder="Extra Notes"/>
      </div>
      <div className="button-row">
      <button className='delete'>Delete</button>
      <button className='save'>Save</button>
      </div>
    </form>
  );
}