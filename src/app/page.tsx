import { Hero } from '@/components/organisms/Hero/Hero';
import { Layout } from '@/components/templates/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI and ML */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600">
                Custom AI solutions and model automation to transform your business processes.
              </p>
            </div>
            
            {/* Cloud Computing */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600">
                Expert AWS and Azure cloud services for scalable and secure infrastructure.
              </p>
            </div>
            
            {/* Development */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Development</h3>
              <p className="text-gray-600">
                Full-stack development using React, Node.js, Python, and other modern technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 