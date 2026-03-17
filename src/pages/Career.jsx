import React from 'react';
import { Briefcase } from 'lucide-react';

const Career = () => {
  const jobs = [
    { title: "Quality Assurance Manager", type: "Full Time", loc: "Hyderabad" },
    { title: "Textile Engineer", type: "Full Time", loc: "Surat Hub" }
  ];

  return (
    <div className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-black mb-12 text-center uppercase tracking-widest">Join Our Elite Team</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {jobs.map((job, i) => (
          <div key={i} className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition flex justify-between items-center group">
            <div className="flex items-center gap-4">
              <Briefcase className="text-gray-400 group-hover:text-blue-600" />
              <div>
                <h4 className="font-bold text-lg text-slate-800">{job.title}</h4>
                <p className="text-sm text-gray-500">{job.loc} | {job.type}</p>
              </div>
            </div>
            <button className="text-blue-600 font-bold hover:underline">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;