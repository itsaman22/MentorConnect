import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "SOFTWARE ENGINEER",
      company: "Google",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "The mentorship I received through MentorConnect transformed my career trajectory. My mentor provided invaluable guidance that helped me land my dream role at Google."
    },
    {
      id: 2,
      name: "Michael Patel",
      role: "PRODUCT MANAGER",
      company: "Microsoft",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Having a mentor who had already walked the path I was pursuing made all the difference. The structured approach and personalized guidance were exactly what I needed."
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "DATA SCIENTIST",
      company: "Amazon",
      image: "https://plus.unsplash.com/premium_photo-1663100021298-21f71154a765?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "The platform made it incredibly easy to connect with experienced mentors in my field. The insights and practical advice I received were instrumental in my professional growth."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
            TESTIMONIALS
          </h2>
          <h3 className="mt-2 text-4xl font-bold text-gray-900 font-poppins">
            Real Stories, Real Impact
          </h3>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Discover how mentorship has transformed careers and empowered professionals across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 mb-8">
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-blue-600">
                      {testimonial.role}
                    </span>
                    <span className="text-sm text-gray-500">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;