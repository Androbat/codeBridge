import { Layout } from '@/components/templates/Layout/Layout';

export default function About() {
  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Empowering Digital Innovation
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At CodeBridge, we bridge the gap between innovative ideas and technological reality.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {/* Vision */}
              <div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  <p className="mt-3 text-lg text-gray-500">
                    To be the leading force in digital transformation, helping businesses harness the power of AI and cloud technologies.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  <p className="mt-3 text-lg text-gray-500">
                    To deliver cutting-edge solutions that drive innovation and create lasting value for our clients through technology excellence.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
                  <p className="mt-3 text-lg text-gray-500">
                    Innovation, integrity, and client success drive everything we do. We believe in sustainable, scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose CodeBridge?</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h4>
                <p className="text-gray-600">
                  Our team consists of experienced developers, engineers, and AI specialists who are passionate about technology and innovation.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Cutting-edge Technology</h4>
                <p className="text-gray-600">
                  We stay ahead of the curve with the latest technologies in AI, cloud computing, and software development.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Custom Solutions</h4>
                <p className="text-gray-600">
                  We create tailored solutions that perfectly match your business needs and objectives.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Reliable Support</h4>
                <p className="text-gray-600">
                  Our dedicated support team ensures your systems run smoothly and efficiently at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 