import React from 'react';

const HowItWorks = () => {
  const steps = [
    { icon: ['👤', '+'], title: 'Select Your Role and Sign Up' },
    { icon: ['📄', '✓'], title: 'Buyers Post Your Requirements' },
    { icon: ['📄', '🔍'], title: 'Review, Select, and Contact the Best Suppliers' },
    { icon: ['👤', '📝'], title: 'Suppliers Complete your profile and get notified for opportunities' },
    { icon: ['📝', '✍️'], title: 'Contact to Buyers and Share your Quote for the service' },
    { icon: ['🤝', '✓'], title: 'Both the Parties can Connect and Make Business Leave a Feedback' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">How it works?</h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with 
        potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className={`p-8 rounded-lg text-center ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
            <div className="relative inline-block mb-4">
              <span className="text-4xl">{step.icon[0]}</span>
              <span className="absolute bottom-0 right-0 text-2xl transform translate-x-1/2 translate-y-1/2">
                {step.icon[1]}
              </span>
            </div>
            <h3 className="font-semibold md:text-md">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;