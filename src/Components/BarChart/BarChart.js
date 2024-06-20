import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import file from '../../Assets/edusity_assets/final-01.csv';

const BarChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(file);
        const text = await response.text();
        const rows = text.split('\n').slice(1); // Remove header row
        const parsedData = rows.map(row => {
          const [Sr_No, visit_date, Company_Name, Comp, IT, ENTC, Sal_lpa, total_no, total, Month] = row.split(',');
          return Month;
        });
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

  // Count the number of companies for each month
  const companyCountByMonth = {};
  data.forEach(month => {
    if (!companyCountByMonth[month]) {
      companyCountByMonth[month] = 1;
    } else {
      companyCountByMonth[month]++;
    }
  });

  // Generate a custom color palette for the bars
  const colors = generateColors(Object.keys(companyCountByMonth).length);

  const chartData = {
    labels: Object.keys(companyCountByMonth),
    datasets: [
      {
        label: 'Number of Companies',
        backgroundColor: colors,
        borderWidth: 1,
        data: Object.values(companyCountByMonth),
      },
    ],
  };

  return (
    <div style={{ height: '500px', width: '800px' }}>
      <Bar
        data={chartData}
        options={{
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Month',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Number of Companies',
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

export default BarChart;
