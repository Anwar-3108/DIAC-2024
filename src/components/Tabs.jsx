import  { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabClickHandler = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col lg:w-1/4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab cursor-pointer p-2 lg:p-4 text-center ${
              activeTab === index ? 'bg-gray-200' : ''
            }`}
            onClick={() => tabClickHandler(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="lg:w-3/4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane p-4 ${
              activeTab === index ? 'block' : 'hidden'
            }`}
          >
            <img src={tab.image} alt={tab.title} className="mx-auto mb-4" />
            <p className="text-center">{tab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
