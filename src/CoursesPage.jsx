/*
    ● Update CoursesPage.jsx component to use list rendering instead of
    static render.
    ● Hide the Enroll Now button if the course is expired.
    ● Bonus: Change the styles of a course that is top rated, to stand out of
    the other courses.
*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SectionHeader from './SectionHeader'
import SectionBody from './Sectionbody'
import CourseCard from './CourseCard'
import style from './Card-style.module.css'

const CoursesPage = () => {
    const [count, setCount] = useState(0)
    const [courses, setCourses] = useState([
        {
            // todo : id 
            name: "Advanced JavaScript",
            imageSrc: reactLogo,
            description: "Dive deep into advanced JavaScript concepts, including closures, promises, and async/await.",
            expired: false,
            Rated: 3.5
        },
        {
            name: "React Development",
            imageSrc: viteLogo,
            description: "Learn how to build fast, interactive web applications with React, a popular JavaScript library.",
            expired: true,
            Rated: 5.0
        },
        {
            name: "Vue 3",
            imageSrc: viteLogo,
            description: "Get up to speed with the Vue.js framework, including the latest version, Vue 3.",
            expired: false,
            Rated: 9.7
        }
    ])

    return (
        <div className={style.page}>
        <SectionHeader> 
            <h2 style={{fontSize: '24px',textAlign: 'center'}}>Explore Our Courses</h2>
        </SectionHeader>
        <SectionBody>
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        name={course.name}
                        imageSrc={course.imageSrc}
                        description={course.description}
                        expired={course.expired}
                        Rated={course.Rated}
                    />
                ))}

        </SectionBody>
        </div>
    )
    }

export default CoursesPage