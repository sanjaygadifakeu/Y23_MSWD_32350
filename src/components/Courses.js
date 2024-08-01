import React from 'react';

const Courses = () => {
  const courses = [
    { courseCode: 'CS101', courseName: 'Introduction to Programming', ltps: '3-0-0', credits: 3 },
    { courseCode: 'MA101', courseName: 'Calculus', ltps: '3-1-0', credits: 4 },
  ];

  return (
    <div className="course-grid">
      {courses.map(course => (
        <div key={course.courseCode} className="course-card">
          <h3>{course.courseName}</h3>
          <p>Course Code: {course.courseCode}</p>
          <p>LTPS: {course.ltps}</p>
          <p>Credits: {course.credits}</p>
        </div>
      ))}
    </div>
  );
}

export default Courses;