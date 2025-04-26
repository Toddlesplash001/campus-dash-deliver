
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Orders = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-04-26",
      status: "Delivered",
      items: "Books from Library",
      total: "$15.00",
    },
    {
      id: "ORD-002",
      date: "2024-04-25",
      status: "In Transit",
      items: "Campus Store Package",
      total: "$25.50",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="flex flex-row items-center gap-4">
            <Package className="h-12 w-12 text-blue-500" />
            <div>
              <CardTitle className="text-2xl">My Orders</CardTitle>
              <p className="text-gray-600">View and track your delivery orders</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{order.items}</p>
                    <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                    <p className="text-sm text-gray-600">Date: {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.total}</p>
                    <p className="text-sm text-blue-500">{order.status}</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
