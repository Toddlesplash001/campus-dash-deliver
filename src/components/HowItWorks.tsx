
import { CheckCircle } from 'lucide-react';

const steps = [
  { 
    id: 1, 
    name: 'Create an Account', 
    description: 'Sign up with your campus email to get started' 
  },
  { 
    id: 2, 
    name: 'Place Your Order', 
    description: 'Select from various services and place your delivery request' 
  },
  { 
    id: 3, 
    name: 'Track in Real-Time', 
    description: 'Follow your delivery as it makes its way to you' 
  },
  { 
    id: 4, 
    name: 'Receive Your Items', 
    description: 'Get your delivery and rate your courier experience' 
  },
];

const HowItWorks = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple steps to get your deliveries
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Getting started with CampusDash is quick and easy. Follow these simple steps:
          </p>
        </div>

        <div className="mt-10">
          <div className="relative">
            {/* Line connector */}
            <div className="hidden sm:block absolute top-12 left-1/2 w-0.5 h-full -ml-px bg-gray-300" aria-hidden="true"></div>
            
            <div className="relative space-y-8">
              {steps.map((step, stepIdx) => (
                <div key={step.id} className="relative">
                  <div className="flex items-center">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full">
                        <span className="text-white font-medium">{step.id}</span>
                      </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="ml-4 min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {step.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {step.description}
                        </p>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:ml-6">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
