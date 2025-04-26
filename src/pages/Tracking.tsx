
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Tracking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="flex flex-row items-center gap-4">
            <Navigation className="h-12 w-12 text-blue-500" />
            <div>
              <CardTitle className="text-2xl">Track Delivery</CardTitle>
              <p className="text-gray-600">Real-time tracking of your campus deliveries</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-4">Current Delivery Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-medium">Order Received</p>
                      <p className="text-sm text-gray-600">10:30 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-medium">Courier Assigned</p>
                      <p className="text-sm text-gray-600">10:45 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
                    <div>
                      <p className="font-medium">In Transit</p>
                      <p className="text-sm text-gray-600">Current Location: Student Center</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="font-medium">Delivered</p>
                      <p className="text-sm text-gray-600">Estimated: 11:15 AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Delivery Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="font-medium">ORD-002</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Courier</p>
                    <p className="font-medium">Alex M.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pickup Location</p>
                    <p className="font-medium">Campus Store</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Delivery Location</p>
                    <p className="font-medium">Dorm Building A, Room 203</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Tracking;
