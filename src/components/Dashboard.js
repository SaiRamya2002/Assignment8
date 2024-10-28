import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import './Dashboard.css';

const Dashboard = () => {
    const { students } = useContext(StudentContext);
    const totalStudents = students.length; // Count of students

    return (
        <div className="dashboard">
            <h2>Welcome to the Dashboard</h2>
            <div className="stats-card">
                <h3>Total Students: {totalStudents}</h3>
            </div>
        </div>
    );
};

export default Dashboard;