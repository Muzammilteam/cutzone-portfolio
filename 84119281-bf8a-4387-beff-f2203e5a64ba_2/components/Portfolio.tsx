
'use client';

import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      title: 'Corporate Training Video',
      category: 'Corporate',
      image: 'https://readdy.ai/api/search-image?query=Professional%20corporate%20training%20video%20production%20setup%20with%20modern%20office%20environment%2C%20business%20people%20in%20meeting%20room%2C%20clean%20minimalist%20design%2C%20professional%20lighting%2C%20corporate%20branding%20elements%2C%20sleek%20presentation%20screens&width=600&height=400&seq=portfolio-1&orientation=landscape',
      description: 'Professional training video with motion graphics and clear audio narration for Fortune 500 company.'
    },
    {
      title: 'Wedding Highlight Reel',
      category: 'Wedding',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20wedding%20ceremony%20highlights%20with%20romantic%20cinematic%20lighting%2C%20bride%20and%20groom%20emotional%20moments%2C%20elegant%20venue%20decoration%2C%20soft%20warm%20tones%2C%20professional%20wedding%20videography%20style%2C%20dreamy%20atmosphere&width=600&height=400&seq=portfolio-2&orientation=landscape',
      description: 'Emotional wedding highlight reel with color grading and synchronized music for perfect storytelling.'
    },
    {
      title: 'Product Launch Campaign',
      category: 'Marketing',
      image: 'https://readdy.ai/api/search-image?query=Modern%20product%20launch%20video%20with%20sleek%20technology%20product%20showcase%2C%20dynamic%20motion%20graphics%2C%20professional%20studio%20lighting%2C%20contemporary%20design%20elements%2C%20marketing%20campaign%20visuals%2C%20high-tech%20presentation&width=600&height=400&seq=portfolio-3&orientation=landscape',
      description: 'Dynamic product launch video with 3D animations and engaging motion graphics for tech startup.'
    },
    {
      title: 'Music Video Edit',
      category: 'Music',
      image: 'https://readdy.ai/api/search-image?query=Creative%20music%20video%20production%20with%20artistic%20lighting%20effects%2C%20musician%20performing%20with%20instruments%2C%20vibrant%20colors%2C%20dynamic%20camera%20angles%2C%20professional%20music%20studio%20setup%2C%20creative%20visual%20effects&width=600&height=400&seq=portfolio-4&orientation=landscape',
      description: 'Creative music video with synchronized cuts, color effects, and artistic visual storytelling.'
    },
    {
      title: 'Social Media Content',
      category: 'Social Media',
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20content%20creation%20setup%20with%20smartphone%20filming%2C%20influencer%20recording%20video%2C%20modern%20aesthetic%2C%20bright%20lighting%2C%20trendy%20background%2C%20social%20media%20graphics%2C%20engaging%20visual%20content&width=600&height=400&seq=portfolio-5&orientation=landscape',
      description: 'Engaging social media content optimized for Instagram, TikTok, and YouTube platforms.'
    },
    {
      title: 'Documentary Short Film',
      category: 'Documentary',
      image: 'https://readdy.ai/api/search-image?query=Documentary%20filmmaking%20scene%20with%20interview%20setup%2C%20professional%20documentary%20lighting%2C%20storytelling%20elements%2C%20authentic%20moments%2C%20cinematic%20composition%2C%20real%20people%20stories%2C%20documentary%20style%20visuals&width=600&height=400&seq=portfolio-6&orientation=landscape',
      description: 'Compelling documentary short film with narrative structure and professional interview editing.'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our recent video editing projects and see the quality of our work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-full">
                    <i className="ri-play-fill text-2xl text-black"></i>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/portfolio" 
            className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 rounded-lg transition-colors cursor-pointer whitespace-nowrap inline-block"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
