import React from 'react';

const Management = () => {
  const leaders = [
    { name: "Mr. S. Parekh", role: "Chairman & Managing Director", bio: "30+ years of expertise in global textile supply chains." },
    { name: "Mrs. Anjali P.", role: "Director of Operations", bio: "Specialist in industrial automation and e-trade logistics." }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Our Management</h2>
          <p className="text-slate-500 text-lg">Guided by leaders who understand the fabric of the industry and the speed of digital trade.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {leaders.map((leader, i) => (
            <div key={i} className="group border-t-2 border-slate-100 pt-8">
              <div className="h-[400px] bg-slate-100 mb-6 overflow-hidden">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-400 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{leader.name}</h3>
              <p className="text-blue-600 font-bold text-xs uppercase mb-4 tracking-widest">{leader.role}</p>
              <p className="text-slate-500 leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Management;