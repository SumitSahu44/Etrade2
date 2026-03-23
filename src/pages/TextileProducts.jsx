import React from "react";

const TextileProducts = () => {
  const products = [
    {
      name: "Cotton Fabric",
      img: "https://images.unsplash.com/photo-1601056639638-c53c50e13ead?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Linen Material",
      img: "https://plus.unsplash.com/premium_photo-1664299852788-5a24db0d7e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Industrial Yarn",
      img: "https://images.unsplash.com/photo-1707914704041-38449d9832aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eWFybiUyMGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Finished Textile Rolls",
      img: "https://media.istockphoto.com/id/171583308/photo/denim-textile-industry-big-weaving-room-hdr.webp?a=1&b=1&s=612x612&w=0&k=20&c=Twkye7uE4XNG9Qg5XkF_hLYsW3aGzM8WVrnRTTsgXkw=",
    },
    {
      name: "Dyeing Process",
      img: "https://images.unsplash.com/photo-1606259457945-67dc66271ee6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhYnJpY3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Premium Cloth Export",
      img: "https://media.istockphoto.com/id/1265040574/photo/stack-of-sweaters-on-a-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=WgQgGs8xR541DyhsJuysayKHcmtI3k8vgoPL9HIGZ44=",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Our Textile Range
          </h2>
          <p className="text-slate-600">
            High-quality fabrics and materials engineered for global bulk trade and industrial use.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-slate-200"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white font-semibold text-lg ">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-300 uppercase st mt-1">
                  Bulk Supply • Export Quality
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TextileProducts;