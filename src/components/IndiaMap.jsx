import React from 'react';

const IndiaMap = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-black mb-6 leading-tight">PAN-INDIA <br /><span className="text-blue-500 underline uppercase tracking-tighter">Textile Network</span></h2>
          <p className="text-gray-400 mb-8">We are connected with over 500+ associate offices and industrial hubs across the country, ensuring seamless trade from Hyderabad to every corner of India.</p>
          <div className="space-y-4">
            {['Telangana Hub', 'Gujarat Hub (Surat)', 'Tamil Nadu (Coimbatore)', 'Maharashtra Hub'].map(hub => (
              <div key={hub} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                <span className="font-medium">{hub}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img src="https://img.freepik.com/free-vector/detailed-map-india_1035-131.jpg" alt="India Map" className="w-full opacity-60 grayscale hover:grayscale-0 transition duration-700" />
        </div>
      </div>
    </section>
  );
};

export default IndiaMap;