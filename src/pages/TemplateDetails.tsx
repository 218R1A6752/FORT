// import { useParams } from 'react-router-dom';
// import { templates } from '../data/templates';

// export default function TemplateDetails() {
//   // Get the template ID from the URL parameters
//   const { id } = useParams<{ id: string }>(); // Ensure the type is properly defined

//   // Find the template with the matching ID
//   const template = templates.find((t) => t.id === Number(id));

//   // Handle the case where the template is not found
//   if (!template) {
//     return <div className="text-center text-gray-500">Template not found.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-700 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-6">{template.name}</h1>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <img
//             src={`${import.meta.env.BASE_URL}${template.image}`}
//             alt={template.name}
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//           <div className="space-y-4">
//             <p className="text-gray-700 text-lg">{template.description}</p>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
//               <p className="text-gray-600">
//                 <strong>Price:</strong> ${template.price}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Category:</strong> {template.category}
//               </p>
//             </div>
//             <a
//               href={`${import.meta.env.BASE_URL}${template.downloadUrl}`}
//               className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg transition-all duration-300"
//             >
//               Download Template
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { templates } from '../data/templates';

export default function TemplateDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);

  // Find the template with the matching ID
  const template = templates.find((t) => t.id === Number(id));

  // Handle the case where the template is not found
  if (!template) {
    return <div className="text-center text-gray-500">Template not found.</div>;
  }

  // Simulate a purchase process
  const handlePurchase = () => {
    // Navigate to the purchase page with the template ID as a parameter
    navigate(`/purchase/${id}`, {
      state: { template },
    });
  };

  // Simulate purchase success (use real API or logic here)
  const handlePurchaseSuccess = () => {
    setIsPurchased(true); // Mark the template as purchased
  };

  return (
    <div className="min-h-screen bg-gray-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">{template.name}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <img
            src={`${import.meta.env.BASE_URL}${template.image}`}
            alt={template.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <p className="text-gray-700 text-lg">{template.description}</p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
              <p className="text-gray-600">
                <strong>Price:</strong> ${template.price}
              </p>
              <p className="text-gray-600">
                <strong>Category:</strong> {template.category}
              </p>
            </div>
            {!isPurchased ? (
              <button
                onClick={handlePurchase}
                className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-700 hover:to-secondary-600 shadow-lg transition-all duration-300"
              >
                Purchase Template
              </button>
            ) : (
              <a
                href={`${import.meta.env.BASE_URL}${template.downloadUrl}`}
                className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg transition-all duration-300"
              >
                Download Template
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
