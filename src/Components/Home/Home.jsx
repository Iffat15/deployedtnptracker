import React from 'react';
import Charts from '../../Components/charts/charts'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import {ResponsiveContainer} from 'recharts';
import Listtask from '../../Components/List'
import CompaniesChart from '../../Components/BarChart/BarChart'
import PieChart from '../PieChart/PieChart';
import LineChart from '../LineChart/LineChart';
import PieChart2 from '../PieChart2/PieChart2'
import PieChart3 from '../PieChart3/PieChart3';
import Navbar from '../Navbar/Navbar';

import './Home.css'
const Home = () => {
    return (
        
        <main className='main-container'>
            <Navbar/>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='dash-card'>
                    <div className='dash-card-inner'>
                        <h3>Less than 5 lpa</h3>
                        <BsFillArchiveFill className='dash-card_icon'/>
                    </div>
                    <h1>130</h1>
                </div>
                <div className='dash-card'>
                    <div className='dash-card-inner'>
                        <h3>Less than 10 lpa</h3>
                        <BsFillGrid3X3GapFill className='dash-card_icon'/>
                    </div>
                    <h1>120</h1>
                </div>
                <div className='dash-card'>
                    <div className='dash-card-inner'>
                        <h3>Less than 15 lpa</h3>
                        <BsPeopleFill className='dash-card_icon'/>
                    </div>
                    <h1>190</h1>
                </div>
                <div className='dash-card'>
                    <div className='dash-card-inner'>
                        <h3>Less than 20 lpa</h3>
                        <BsFillBellFill className='dash-card_icon'/>
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <div className='chart-item'>
                    
                       <CompaniesChart/>
                    
                </div>
                <div className='chart-item'>
                
                    <PieChart/>
                </div>
                <div className='chart-item'>
                
                    <PieChart2/>
                </div>
                <div className='chart-item'>
                
                    <PieChart3/>
                </div>
                <div className='chart-item'>
                    <LineChart/>
                </div>
                <div className='List'>
                    
                       <Listtask/>
                   
                </div>
            </div>
        </main>
    )
}

export default Home;
