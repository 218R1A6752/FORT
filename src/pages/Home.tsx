import { Download, Layout, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { templates } from '../data/templates';
import TemplateCard from '../components/TemplateCard';

export default function Home() {
  const featuredTemplates = templates.filter(template => template.featured);

  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-hero-pattern bg-cover bg-center opacity-5"></div>
      <div className="fixed inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent opacity-30"></div>

      {/* Content */}
      <div className="relative">
        {/* Spacer for fixed header */}
        <div className="h-24"></div>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.400),transparent)] opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight floating">
                Craft Your Perfect Resume with
                <span className="bg-gradient-to-r from-primary-300 to-secondary-300 text-transparent bg-clip-text"> Professional Templates</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                Choose from our collection of ATS-friendly, professionally designed resume templates. 
                Stand out from the crowd and land your dream job.
              </p>
              <Link
                to="/templates" 
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-2xl text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg shadow-primary-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary-500/30"
              >
                Browse Templates
                <Download className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Templates Section */}
        <section id="templates" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Templates</h2>
              <p className="text-gray-300">Our most popular professional resume templates</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {featuredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                to="/templates"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-2xl text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg shadow-primary-500/25 transition-all hover:scale-105"
              >
                View All Templates
                <Download className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Why Choose <span className="bg-gradient-to-r from-primary-300 to-secondary-300 text-transparent bg-clip-text">ResumeForge</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform">
                  <Layout className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Professional Design</h3>
                <p className="text-gray-300 leading-relaxed">
                  Expertly crafted templates that help you make a lasting impression
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Easy Customization</h3>
                <p className="text-gray-300 leading-relaxed">
                  Simple to edit in Microsoft Word with clear instructions
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-500/25 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">ATS-Optimized</h3>
                <p className="text-gray-300 leading-relaxed">
                  Engineered to pass Applicant Tracking Systems with ease
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}