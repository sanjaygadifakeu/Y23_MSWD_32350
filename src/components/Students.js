import React from 'react';

const Students = () => {
  const students = [
    { id: 'S001', name: 'Alice Brown', branch: 'CSE', year: '2nd' },
    { id: 'S002', name: 'Bob White', branch: 'ECE', year: '1st' },
    { id: 'S003', name: 'Charlie Black', branch: 'ME', year: '3rd' },
    { id: 'S004', name: 'David Green', branch: 'EEE', year: '4th' },
    { id: 'S005', name: 'Eva Blue', branch: 'CIVIL', year: '2nd' },
  ];

  return (
    <div className="student-grid">
      {students.map(student => (
        <div key={student.id} className="student-card">
          <h3>{student.name}</h3>
          <p>Branch: {student.branch}</p>
          <p>Year: {student.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Students;