'use client';

export default function Services() {
  const services = [
    {
      icon: 'ri-film-line',
      title: 'Video Editing',
      description: 'Professional video editing with smooth transitions, color correction, and audio enhancement for all types of content.',
      features: ['Color Grading', 'Audio Mixing', 'Transitions', 'Effects']
    },
    {
      icon: 'ri-palette-line',
      title: 'Motion Graphics',
      description: 'Eye-catching motion graphics and animations to enhance your videos and make them stand out.',
      features: ['2D Animation', 'Text Animation', 'Logo Animation', 'Infographics']
    },
    {
      icon: 'ri-music-line',
      title: 'Audio Post-Production',
      description: 'Complete audio post-production services including sound design, mixing, and mastering.',
      features: ['Sound Design', 'Voice Over', 'Music Sync', 'Noise Reduction']
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Social Media Content',
      description: 'Optimized video content for social media platforms with proper formatting and engaging visuals.',
      features: ['Instagram Reels', 'TikTok Videos', 'YouTube Shorts', 'Facebook Posts']
    },
    {
      icon: 'ri-building-line',
      title: 'Corporate Videos',
      description: 'Professional corporate video production for presentations, training, and promotional content.',
      features: ['Training Videos', 'Presentations', 'Promotional', 'Testimonials']
    },
    {
      icon: 'ri-camera-line',
      title: 'Event Highlights',
      description: 'Create memorable highlight reels from weddings, parties, and corporate events.',
      features: ['Wedding Films', 'Party Highlights', 'Corporate Events', 'Celebrations']
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive video editing services to meet all your creative needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/50 border border-orange-500/20 rounded-lg p-6 hover:border-orange-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500/20 rounded-lg mb-4">
                <i className={`${service.icon} text-2xl text-orange-500`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <i className="ri-check-line text-orange-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}