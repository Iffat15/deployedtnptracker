import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import file from '../../Assets/edusity_assets/final-01.csv';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

const Charts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(file);
      const text = await response.text();
      const rows = text.split('\n').slice(1); // Remove header row
      const parsedData = rows.map(row => {
        const [Sr_No, visit_date, Company_Name, Comp, IT, ENTC, Sal_Lpa, total_No, total] = row.split(',');
        return { Company_Name, Comp: parseInt(Comp), IT: parseInt(IT), ENTC: parseInt(ENTC) };
      });
      setData(parsedData);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Process the data to get the number of students placed in each company for each department
  const companies = {};
  data.forEach((row) => {
    const company = row.Company_Name;
    if (!companies[company]) {
      companies[company] = {
        IT: 0,
        Comp: 0,
        ENTC: 0,
        Total: 0,
      };
    }
    companies[company].IT += row.IT;
    companies[company].Comp += row.Comp;
    companies[company].ENTC += row.ENTC;
    companies[company].Total += row.IT + row.Comp + row.ENTC;
  });

  // Sort companies by total number of students placed
  const sortedCompanies = Object.entries(companies).sort(([, a], [, b]) => b.Total - a.Total);

  // Prepare data for Chart.js
  const chartData = {
    labels: sortedCompanies.map(([company]) => company),
    datasets: [
      {
        label: 'IT',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: sortedCompanies.map(([, dept]) => dept.IT),
        barThickness: 5, // Adjust the thickness of the bars
      },
      {
        label: 'Comp',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: sortedCompanies.map(([, dept]) => dept.Comp),
        barThickness: 5, // Adjust the thickness of the bars
      },
      {
        label: 'Electronics',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 206, 86, 0.4)',
        hoverBorderColor: 'rgba(255, 206, 86, 1)',
        data: sortedCompanies.map(([, dept]) => dept.ENTC),
        barThickness: 5,
      },
    ],
  };

  return (
    <div style={{ height: '1300px', overflow: 'auto' }}>
    <h2>Number of Students Placed in Each Company</h2>
    <div style={{ width: '100%', height: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
      <Bar
        data={chartData}
        width={50}
        height={120} // Increase the height to accommodate all companies
        options={{
          indexAxis: 'y', // Display bars horizontally
          maintainAspectRatio: false, // Allow chart to be larger than its container
          scales: {
            x: {
              stacked: true,
              ticks: {
                beginAtZero: false,
                stepSize: 10, // Decrease the step size on the x-axis
                font: {
                  size: 10, // Adjust the font size of the x-axis labels
                  color: 'blue', // Adjust the color of the x-axis labels
                  weight: 'bold', // Make the x-axis labels bold
                },
              },
            },
            y: {
              stacked: true,
              ticks: {
                beginAtZero: false,
                stepSize: 1, // Adjust the step size on the y-axis
                font: {
                  size: 8, // Decrease font size
                  weight: 'bold',
                },
              },
            },
          },
        }}
      />
    </div>
  </div>
  );
};

export default Charts;
