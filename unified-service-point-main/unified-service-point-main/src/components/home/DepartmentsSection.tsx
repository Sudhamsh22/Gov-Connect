
import React from 'react';

const departments = [
  {
    name: "Health Department",
    icon: "🏥"
  },
  {
    name: "Education Department",
    icon: "🎓"
  },
  {
    name: "Transport Department",
    icon: "🚌"
  },
  {
    name: "Housing Department",
    icon: "🏠"
  },
  {
    name: "Agriculture Department",
    icon: "🌾"
  },
  {
    name: "Finance Department",
    icon: "💰"
  },
  {
    name: "Energy Department",
    icon: "⚡"
  },
  {
    name: "Social Services",
    icon: "👪"
  }
];

const DepartmentsSection = () => {
  return (
    <section className="section-padding bg-gov-neutral-100">
      <div className="gov-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gov-blue mb-4">Connected Departments</h2>
          <p className="text-lg text-gov-neutral-700 max-w-2xl mx-auto">
            GovConnect brings together various government departments on a single platform for seamless collaboration.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-4xl mb-3">{dept.icon}</div>
              <h3 className="font-medium text-gov-neutral-800">{dept.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
