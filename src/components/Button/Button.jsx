import './Button.css'

export default function Button({ addLessonVisible, setAddLessonVisible }) {
  function handleClick() {
    setAddLessonVisible(!addLessonVisible);
  }
  return(
    <div className="button-container">
      <button onClick={handleClick}>Add Lesson</button>
    </div>
  );
}