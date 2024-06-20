import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import StatCard from '../../Components/StatCard/StatCard';
import './Statistics.css';
import video from '../../Assets/vid3.mp4';

const StatsComponent = () => {
    const [studentsPlaced, setStudentsPlaced] = useState(0);
    const [companiesVisited, setCompaniesVisited] = useState(0);
    const [averagePackage, setAveragePackage] = useState(0);

    useEffect(() => {
        // Simulate data fetching or API call to get actual values
        setTimeout(() => {
            setStudentsPlaced(250);
            setCompaniesVisited(100);
            setAveragePackage(8.5);
        }, 1000); // Simulating a delay for fetching data
    }, []);

    return (
        <div className="relative flex justify-center items-center gap-0.1 overflow-hidden" style={{ padding: '3rem' }}>
            <div className="absolute inset-0 z-0">
                <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="z-10 flex justify-between gap-56">
                <StatCard title="Students Placed" value={<CountUp end={studentsPlaced} duration={2} />} style={{ marginRight: '0.5rem' }} />
                <StatCard title="Companies Visited" value={<CountUp end={companiesVisited} duration={2} />} style={{ marginRight: '0.5rem' }} />
                <StatCard title="Average Package" value={<CountUp end={averagePackage} decimals={1} duration={2} />} />
            </div>
            
        </div>
    );
};

export default StatsComponent;
