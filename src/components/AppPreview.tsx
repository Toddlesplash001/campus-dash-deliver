
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const AppPreview = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Download our mobile app
            </h2>
            <p className="mt-3 max-w-md text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl">
              Get the full CampusDash experience on your phone. Place orders, track deliveries, and manage your account on the go.
            </p>
            <div className="mt-8 flex space-x-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.71 13.29L14.42 10l3.3-3.29a1 1 0 000-1.42 1 1 0 00-1.42 0l-3.29 3.3-3.29-3.3a1 1 0 00-1.42 0 1 1 0 000 1.42l3.3 3.29-3.3 3.29a1 1 0 00.325 1.632 1 1 0 001.095-.212l3.29-3.3 3.29 3.3a1 1 0 001.42-1.42z" />
                </svg>
                App Store
              </Button>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                </svg>
                Google Play
              </Button>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-72 h-[500px] bg-black rounded-[36px] border-[14px] border-black overflow-hidden shadow-xl transform rotate-3">
              <div className="absolute w-1/2 h-7 bg-black rounded-b-2xl top-0 left-1/4"></div>
              <div className="bg-white h-full w-full overflow-hidden">
                <div className="w-full h-16 bg-blue-500 flex items-center px-6">
                  <div className="flex-1">
                    <div className="h-3 w-24 bg-white rounded-full opacity-70"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 w-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-gray-100 w-full h-24 rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
                      <div className="ml-3">
                        <div className="h-3 w-24 bg-gray-300 rounded-full"></div>
                        <div className="h-2 w-16 bg-gray-200 rounded-full mt-1"></div>
                      </div>
                    </div>
                    <div className="h-3 w-full bg-gray-200 rounded-full"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-14 w-full bg-blue-50 rounded-lg border border-blue-100 p-3">
                      <div className="flex justify-between">
                        <div className="w-32 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-10 h-3 bg-blue-300 rounded-full"></div>
                      </div>
                      <div className="w-24 h-2 bg-gray-200 rounded-full mt-2"></div>
                    </div>
                    <div className="h-14 w-full bg-orange-50 rounded-lg border border-orange-100 p-3">
                      <div className="flex justify-between">
                        <div className="w-32 h-3 bg-gray-300 rounded-full"></div>
                        <div className="w-10 h-3 bg-orange-300 rounded-full"></div>
                      </div>
                      <div className="w-24 h-2 bg-gray-200 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
