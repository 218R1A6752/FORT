// import { useState } from 'react';
// import { Download, Eye } from 'lucide-react';
// import { Template } from '../data/templates';
// import Modal from './Modal';

// interface TemplateCardProps {
//   template: Template;
// }

// export default function TemplateCard({ template }: TemplateCardProps) {
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);

//   return (
//     <>
//       <div 
//         className={`template-card rounded-2xl shadow-xl shadow-black/5 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl glow ${
//           template.featured ? 'ring-2 ring-primary-500 ring-offset-4 ring-offset-indigo-950' : ''
//         }`}
//       >
//         <div className="relative group">
//           <img
//             src={`${import.meta.env.BASE_URL}${template.image}`}
//             alt={template.name}
//             className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
//           />
//           {template.featured && (
//             <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm px-3 py-1 rounded-full shadow-lg">
//               Featured
//             </div>
//           )}
//           <div className="absolute top-4 left-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white text-sm px-3 py-1 rounded-full shadow-lg">
//             {template.category}
//           </div>
//         </div>
//         <div className="p-8">
//           <h3 className="text-2xl font-bold bg-gradient-to-br from-secondary-900 to-secondary-700 bg-clip-text text-transparent mb-3">
//             {template.name}
//           </h3>
//           <p className="text-secondary-600 mb-6">{template.description}</p>
//           <div className="flex gap-3">
//             <button
//               onClick={() => setIsPreviewOpen(true)}
//               className="inline-flex items-center px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-700 hover:to-secondary-600 transition-all duration-300 shadow-lg shadow-secondary-600/20 hover:shadow-secondary-600/40"
//             >
//               <Eye className="h-4 w-4 mr-2" />
//               View Template
//             </button>
//             <a
//               href={`${import.meta.env.BASE_URL}${template.downloadUrl}`}
//               className="inline-flex items-center px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40"
//             >
//               <Download className="h-4 w-4 mr-2" />
//               Download
//             </a>
//           </div>
//         </div>
//       </div>
//       <Modal isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)}>
//   <div className="flex flex-col items-center p-6">
//     <h3 className="text-xl font-bold bg-gradient-to-br from-secondary-900 to-secondary-700 bg-clip-text text-transparent mb-4">
//       {template.name}
//     </h3>
//     <div className="overflow-auto max-h-[70vh] w-full border rounded-lg shadow-lg">
//       <img
//         src={`${import.meta.env.BASE_URL}${template.image}`}
//         alt={template.name}
//         className="w-full h-auto"
//       />
//     </div>
//     <div className="flex gap-3 mt-4">
//       <a
//         href={`${import.meta.env.BASE_URL}${template.downloadUrl}`}
//         className="inline-flex items-center px-4 py-2 rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40"
//       >
//         <Download className="h-4 w-4 mr-2" />
//         Download
//       </a>
//     </div>
//   </div>
// </Modal>

//     </>
//   );
// }

import { Download, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Template } from '../data/templates';

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`template-card rounded-2xl shadow-xl shadow-black/5 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl glow ${
        template.featured
          ? 'ring-2 ring-primary-500 ring-offset-4 ring-offset-indigo-950'
          : ''
      }`}
    >
      <div className="relative group">
        <img
          src={`${import.meta.env.BASE_URL}${template.image}`}
          alt={template.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {template.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm px-3 py-1 rounded-full shadow-lg">
            Featured
          </div>
        )}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white text-sm px-3 py-1 rounded-full shadow-lg">
          {template.category}
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold bg-gradient-to-br from-secondary-900 to-secondary-700 bg-clip-text text-transparent mb-3">
          {template.name}
        </h3>
        <p className="text-secondary-600 mb-6">{template.description}</p>
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/templates/${template.id}`)}
            className="inline-flex items-center px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-700 hover:to-secondary-600 transition-all duration-300 shadow-lg shadow-secondary-600/20 hover:shadow-secondary-600/40"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Template
          </button>
          <a
            href={`${import.meta.env.BASE_URL}${template.downloadUrl}`}
            className="inline-flex items-center px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
