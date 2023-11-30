import "./CourseSetUp.css";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as course from "../../utilities/courses-api";
import * as users from "../../utilities/users-api";
import Select from "react-select";
import Gallery from "../../img/gallery 1.png";
import { UserContext } from "../../pages/App/App";

export default function CourseSetUp() {
    const { user } = useContext(UserContext);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: "Programming", label: "Programming" },
        { value: "Cooking & Nutrition", label: "Cooking & Nutrition" },
        { value: "Math", label: "Math" },
        { value: "Art", label: "Art" },
        { value: "Business & Marketing", label: "Business & Marketing" },
        { value: "Health & Fitness", label: "Health & Fitness" },
        { value: "Language", label: "Language" },
        { value: "DIY", label: "DIY" },
        { value: "Other", label: "Other" },
    ];

    const [postImage, setPostImage] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [courseInfo, setCourseInfo] = useState({});
    const [formInfo, setFormInfo] = useState({
        title: "",
        description: "",
        bannerImage: "",
        categories: "",
    });


    async function handleImageChange(e) {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPostImage(base64);
        setFormInfo({ ...formInfo, [e.target.name]: base64 });
        setError("");
    }

    async function handleCatChange(e) {
        setFormInfo({ ...formInfo, categories: e.value });
    }

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    function handleChange(evt) {
        setFormInfo({ ...formInfo, [evt.target.name]: evt.target.value });
        setError("");
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        async function createNewCourse() {
            try {
                const newCourseInfo = await course.createCourse(formInfo, user);
                setCourseInfo({ ...formInfo, _id: newCourseInfo._id });
            } catch {
                setError("Failed To Create Course");
            }
        }
        await createNewCourse();
    }

    useEffect(() => {
        if (courseInfo._id) {
            async function addCourseToUser() {
                try {
                    const addUserToCourse = await users.createdCourses(
                        courseInfo,
                        user
                    );
                } catch {
                    setError("Failed To Add Course To User");
                }
                navigate(`/${courseInfo._id}`, { state: courseInfo });
            }
            addCourseToUser();
        }
    }, [courseInfo]);

    return (
        <form
            className="courseSetUp"
            action=""
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div className="top-row">
                <div className="title">
                    <input
                        placeholder="Course Title"
                        type="text"
                        name="title"
                        value={formInfo.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="photo-upload">
                    <img src={Gallery} alt="choose" />
                    <input
                        type="file"
                        name="bannerImage"
                        onChange={handleImageChange}
                        required
                    />
                </div>
            </div>
            <div className="middle-row">
                <input
                    placeholder="Description"
                    type="text"
                    name="description"
                    value={formInfo.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="bottom-row">
                <h3>Choose a Category</h3>
                <Select
                    options={options}
                    required
                    defaultValue={selectedOption}
                    onChange={handleCatChange}
                />
            </div>
            <div className="button-row">
                <button type="submit">Create Course</button>
                <p className="error-message">&nbsp;{error}</p>
            </div>
        </form>
    );
}
