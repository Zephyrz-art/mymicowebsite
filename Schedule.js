import React, { useEffect, useState } from 'react';

const Schedule = () => {
    const [schedule, setSchedule] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const response = await fetch('https://api.example.com/jutc-schedule'); // Replace with actual API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSchedule(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSchedule();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>JUTC Bus Schedule</h2>
            <table>
                <thead>
                    <tr>
                        <th>Route</th>
                        <th>Arrival Time</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((item) => (
                        <tr key={item.route}>
                            <td>{item.route}</td>
                            <td>{item.arrivalTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;