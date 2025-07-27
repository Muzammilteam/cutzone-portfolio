'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp Solutions',
      content: 'Cutzone Edits transformed our corporate training videos into engaging, professional content. The quality exceeded our expectations and the turnaround time was impressive.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Content Creator',
      company: 'Digital Media Agency',
      content: 'Working with Cutzone Edits has been a game-changer for our social media content. They understand our brand perfectly and deliver consistently high-quality videos.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Event Coordinator',
      company: 'Premium Events',
      content: 'The wedding highlight reel they created was absolutely stunning. They captured every important moment and created a beautiful story that our clients loved.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Startup Founder',
      company: 'InnovateTech',
      content: 'The product launch video they edited helped us achieve a 300% increase in engagement. Their creative approach and technical skills are outstanding.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-orange-500 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-orange-500 text-sm">{testimonial.role}</div>
                <div className="text-gray-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}