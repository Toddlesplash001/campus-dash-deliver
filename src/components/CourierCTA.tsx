
import { Button } from '@/components/ui/button';
import { Bike, DollarSign, Clock, Calendar } from 'lucide-react';

const CourierCTA = () => {
  return (
    <div className="bg-blue-500">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Become a Campus Courier
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-blue-100">
            Earn money between classes by delivering within your campus. Flexible hours, competitive pay, and instant withdrawals.
          </p>
          
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="bg-blue-600 bg-opacity-50 px-4 py-5 rounded-lg text-center">
              <div className="flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-blue-100" />
              </div>
              <h3 className="mt-2 text-white font-medium">Earn Extra Cash</h3>
              <p className="mt-1 text-sm text-blue-100">Make money between classes</p>
            </div>
            <div className="bg-blue-600 bg-opacity-50 px-4 py-5 rounded-lg text-center">
              <div className="flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-100" />
              </div>
              <h3 className="mt-2 text-white font-medium">Flexible Hours</h3>
              <p className="mt-1 text-sm text-blue-100">Work when it fits your schedule</p>
            </div>
            <div className="bg-blue-600 bg-opacity-50 px-4 py-5 rounded-lg text-center">
              <div className="flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-100" />
              </div>
              <h3 className="mt-2 text-white font-medium">Weekly Payouts</h3>
              <p className="mt-1 text-sm text-blue-100">Get paid reliably every week</p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium">
              Apply Now <Bike className="ml-2 -mr-1 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourierCTA;
