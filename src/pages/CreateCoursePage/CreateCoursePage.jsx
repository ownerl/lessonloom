import './CreateCoursePage.css'
import CourseSetUp from '../../components/CourseSetUp/CourseSetUp'

// testing navigate to edit
import CourseEdit from "../../components/CourseEdit/CourseEdit";

    

export default function CreateCoursePage() {
    
    return (
        <main>
            <div className="container">
                <CourseSetUp />
            </div>
        </main>
    );
}
