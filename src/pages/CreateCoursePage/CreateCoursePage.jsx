import { useRef, useState } from "react";
import * as course from "../../utilities/courses-api";

export default function CreateCoursePage() {
    const [courseInfo, setCourseInfo] = useState({
        title: "",
        description: "",
    });
    const [error, setError] = useState("");

    function handleChange(evt) {
        setCourseInfo({ ...courseInfo, [evt.target.name]: evt.target.value });
        setError("");
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            course.createCourse(courseInfo)
        } catch {
            setError('Failed To Create Course')
        }
    }
    return (
        <main>
            <h1>TESTING: adding course to database here</h1>
            <br />

            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={courseInfo.title}
                        onChange={handleChange}
                        required
                    />
                    <label>Description</label>
                    <input
                        type="description"
                        name="description"
                        value={courseInfo.description}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Create Course</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </main>
    );
}
