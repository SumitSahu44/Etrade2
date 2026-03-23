import React from 'react';

const Management = () => {
  const leaders = [
    {
      name: "Mr. S. Parekh",
      role: "Chairman & Managing Director",
      bio: "30+ years of expertise in global textile supply chains.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "Mrs. Anjali P.",
      role: "Director of Operations",
      bio: "Specialist in industrial automation and e-trade logistics.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
    }
    
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-4xl font-black text-slate-900 uppercase mb-4">
            Our Management
          </h2>
          <p className="text-slate-500">
            Leaders driving innovation and excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image (smaller) */}
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">
                  {leader.name}
                </h3>
                <p className="text-blue-600 text-xs font-semibold uppercase mb-2">
                  {leader.role}
                </p>
                <p className="text-slate-500 text-sm">
                  {leader.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Management;