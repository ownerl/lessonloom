import './CourseSetUp.css'
import photoUpload from '../../img/gallery 1.png'

export default function CourseSetUp() {
  return (
    <form className="courseSetUp" action="">
    <div className="top-row">
        <div className="title">
          <input type="text" value="" placeholder="Course Title"/>
        </div>
        <div className="photo-upload">
          Course Photo<img src={photoUpload} alt="upload" /> 
        </div>
    </div>
    <div className="middle-row">
      <input type="text" value="" placeholder="Description"/>
    </div>
    <div className="bottom-row">
      <h3>Choose up to 3 categories</h3>
      <div className="categories">
                <div className="cat">Photography</div>
                <div className="cat">JavaScript</div>
                <div className="cat">Nutrition</div>
                <div className="cat">Physics</div>
                <div className="cat">Painting</div>
                <div className="cat">AI</div>
                <div className="cat">Busienss</div>
                <div className="cat">Yoga</div>
                <div className="cat">Cooking</div>
                <div className="cat">Marketing</div>
            </div>
    </div>
</form>
  )
}