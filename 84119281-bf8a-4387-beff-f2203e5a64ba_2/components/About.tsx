'use client';

export default function About() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-orange-500">Cutzone Edits</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We are passionate video editors dedicated to bringing your creative vision to life. With years of experience in the industry, we specialize in creating compelling visual stories that engage and inspire audiences.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Our team combines technical expertise with creative flair to deliver high-quality video content that exceeds expectations. From corporate presentations to creative content, we handle every project with precision and creativity.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20video%20editor%20working%20at%20computer%20with%20multiple%20monitors%2C%20modern%20editing%20studio%20setup%2C%20creative%20workspace%20with%20professional%20equipment%2C%20focused%20person%20editing%20video%20timeline%2C%20sophisticated%20video%20production%20environment%2C%20contemporary%20office%20design&width=600&height=700&seq=about-1&orientation=portrait"
              alt="Professional video editing workspace"
              className="w-full h-auto rounded-lg object-cover object-top"
            />
            <div className="absolute inset-0 bg-orange-500/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}