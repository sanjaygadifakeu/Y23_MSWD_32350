import React from 'react';

const Faculty = () => {
  const faculties = [
    { id: 'F001', name: 'Dr. John Doe', designation: 'Professor', department: 'Computer Science' },
    { id: 'F002', name: 'Dr. Jane Smith', designation: 'Associate Professor', department: 'Mathematics' },
    { id: 'F003', name: 'Dr. Emily Johnson', designation: 'Assistant Professor', department: 'Physics' },
  ];

  return (
    <div className="faculty-grid">
      
      {faculties.map(faculty => (
        <div key={faculty.id} className="faculty-card">
          <h3>{faculty.name}</h3>
          <p>Designation: {faculty.designation}</p>
          <p>Department: {faculty.department}</p>
        </div>
      ))}
    </div>
  );
}

export default Faculty;