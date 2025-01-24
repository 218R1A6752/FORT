import { useLocation, useNavigate } from 'react-router-dom';

export default function Purchase() {
  const location = useLocation();
  const navigate = useNavigate();
  const template = location.state?.template;

  // Handle payment success (simulate or integrate payment gateway here)
  const handlePaymentSuccess = () => {
    // After purchase, navigate back to the template details page
    navigate(`/templates/${template.id}`, { state: { purchased: true } });
  };

  if (!template) {
    return <div className="text-center text-gray-500">No template selected for purchase.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Purchase {template.name}</h1>
        <p className="text-gray-700 mb-6">Price: ${template.price}</p>
        <button
          onClick={handlePaymentSuccess}
          className="w-full px-4 py-2 rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg transition-all duration-300"
        >
          Complete Purchase
        </button>
      </div>
    </div>
  );
}
