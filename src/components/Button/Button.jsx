import './Button.css'

export default function Button({ addLessonVisible, setAddLessonVisible }) {
  function handleClick() {
    setAddLessonVisible(addLessonVisible ? false : true);
  }
  
  return(
    <div className="button-container">
      <button onClick={handleClick}>{addLessonVisible ? "Add Lesson" : "X"}</button>
    </div>
  );
}