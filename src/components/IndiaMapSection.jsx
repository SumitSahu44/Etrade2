// src/components/IndiaMapSection.jsx
export const IndiaMapSection = () => (
  <section className="py-16 bg-slate-50">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Pan-India Presence</h2>
        <p className="text-gray-600 mb-6">Connecting textile hubs across India—from Surat to Coimbatore.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded shadow-sm border-l-4 border-blue-500">
            <p className="font-bold text-xl">500+</p>
            <p className="text-sm text-gray-500">Authorized Sellers</p>
          </div>
          <div className="p-4 bg-white rounded shadow-sm border-l-4 border-green-500">
            <p className="font-bold text-xl">1200+</p>
            <p className="text-sm text-gray-500">Verified Buyers</p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
        {/* Placeholder for India Map */}
        <img 
          src="https://img.freepik.com/free-vector/detailed-map-india_1035-131.jpg" 
          alt="India Textile Network" 
          className="w-full h-auto opacity-80"
        />
      </div>
    </div>
  </section>
);