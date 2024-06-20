import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import file from '../../Assets/edusity_assets/final-01.csv';

const PieChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(file);
        const text = await response.text();
        const rows = text.split('\n').slice(1); // Remove header row
        const parsedData = rows.map(row => {
          const [Sr_No, visit_date, Company_Name, Comp, IT, ENTC, Sal_lpa, total_no, total, Month] = row.split(',');
          return { Company_Name, IT: parseInt(IT), Sal_lpa: parseFloat(Sal_lpa) };
        }).filter(entry => entry.Sal_lpa < 10); // Filter out companies with Sal_lpa less than 10
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  

  if (!data) {
    return <div>Loading...</div>;
  }

  // Group companies and count IT placements
  const companies = {};
  data.forEach(entry => {
    if (!companies[entry.Company_Name]) {
      companies[entry.Company_Name] = 0;
    }
    companies[entry.Company_Name] += entry.IT;
  });

  // Generate a custom color palette for the pie chart
  const colors = generateColors(Object.keys(companies).length);

  // Prepare data for Chart.js
  const chartData = {
    labels: Object.keys(companies),
    datasets: [
      {
        label: 'IT Students Placed by Company',
        data: Object.values(companies),
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>IT Students Placed by Company</h2>
      <Pie
        data={chartData}
        options={{
          tooltips: {
            callbacks: {
              label: (tooltipItem, data) => {
                const label = data.labels[tooltipItem.index];
                const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return `${label}: ${value} IT Students Placed`;
              },
            },
          },
        }}
      />
    </div>
  );
};

// Function to generate a custom color palette
const generateColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    colors.push(`rgba(${r}, ${g}, ${b}, 0.6)`);
  }
  return colors;
};

export default PieChart;
