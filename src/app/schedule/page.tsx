import { ContactForm } from '@/components/organisms/ContactForm/ContactForm';
import { Layout } from '@/components/templates/Layout/Layout';

export default function Schedule() {
  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Let's Talk About Your Project
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Schedule a call with our experts to discuss how we can help transform your business.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </Layout>
  );
} 