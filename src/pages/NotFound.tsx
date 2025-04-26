
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-8">
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
              <Package className="h-12 w-12 text-blue-500" />
            </div>
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">Page not found</h1>
          <p className="mt-3 text-lg text-gray-500">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button className="bg-blue-500 hover:bg-blue-600">
                Return to homepage
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
