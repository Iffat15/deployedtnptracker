import React from 'react';

const Card = ({ title, value, icon, color }) => {
  return (
    <div className={`relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ${color}`}>
      <div className="flex-auto p-4">
        <div className="flex flex-wrap">
          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <h5 className="text-white uppercase font-bold text-xs">
              {title}
            </h5>
            <span className="font-semibold text-xl text-white">
              {value}
            </span>
          </div>
          <div className="relative w-auto pl-4 flex-initial">
            <div
              className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${color}`}
            >
              {icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExampleComponent = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full xl:w-3/12 lg:w-6/12">
        <Card
          title="Number"
          value="150"
          icon={<i className="fas fa-users"></i>}
          color="bg-blue-500"
        />
      </div>
      <div className="w-full xl:w-3/12 lg:w-6/12">
        <Card
          title="Revenue"
          value="$1,253"
          icon={<i className="fas fa-dollar-sign"></i>}
          color="bg-green-500"
        />
      </div>
    </div>
  );
};

export default ExampleComponent;
