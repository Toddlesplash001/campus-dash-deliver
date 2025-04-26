
import { Package, Clock, MapPin, CreditCard, UserPlus, ShieldCheck } from 'lucide-react';

const features = [
  {
    name: 'Quick Deliveries',
    description: 'Get your items delivered within minutes across campus',
    icon: Clock,
  },
  {
    name: 'Real-time Tracking',
    description: 'Track your delivery in real-time from order to doorstep',
    icon: MapPin,
  },
  {
    name: 'Secure Payments',
    description: 'Multiple secure payment options including campus card integration',
    icon: CreditCard,
  },
  {
    name: 'Student Couriers',
    description: 'Our delivery network is made up of verified students',
    icon: UserPlus,
  },
  {
    name: 'Multiple Services',
    description: 'From food delivery to package pickup and more',
    icon: Package,
  },
  {
    name: 'Safe & Secure',
    description: 'All couriers are verified members of the campus community',
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-500 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need on campus
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            CampusDash offers a comprehensive delivery solution designed specifically for campus life.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
