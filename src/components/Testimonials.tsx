
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Engineering Student",
    image: "https://i.pravatar.cc/150?img=32",
    content: "CampusDash has been a life-saver during finals week! I can get food delivered while studying without losing my spot in the library.",
  },
  {
    name: "Maria Rodriguez",
    role: "Business Major",
    image: "https://i.pravatar.cc/150?img=5",
    content: "I've been working as a courier between classes and it's the perfect flexible job for a busy student. Great way to earn extra money!",
  },
  {
    name: "David Chen",
    role: "Computer Science Student",
    image: "https://i.pravatar.cc/150?img=11",
    content: "The real-time tracking is amazing. I can see exactly when my delivery will arrive, which helps me plan my study breaks better.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold uppercase tracking-wide text-blue-500">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Hear from our campus community
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Students and staff from across campus are enjoying CampusDash services.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
