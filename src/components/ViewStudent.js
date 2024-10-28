import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import './ViewStudent.css'; // Add your CSS styles here

const ViewStudent = () => {
    const { id } = useParams(); // Get the student ID from the URL
    const { students } = useContext(StudentContext);
    const [student, setStudent] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // Find the student with the matching ID
        const foundStudent = students.find(s => s.id === parseInt(id));
        if (foundStudent) {
            setStudent(foundStudent);
        } else {
            setError("Student not found");
        }
    }, [id, students]);

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    return (
        <div className="view-student">
            {student ? (
                <>
                    <h2>Student Details</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Name:</th>
                                <td>{student.name}</td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>{student.email}</td>
                            </tr>
                            <tr>
                                <th>Class:</th>
                                <td>{student.class}</td>
                            </tr>
                            {/* Add more student fields as needed */}
                        </tbody>
                    </table>
                    <Link to="/students" className="back-button">Back to Student List</Link>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ViewStudent;
