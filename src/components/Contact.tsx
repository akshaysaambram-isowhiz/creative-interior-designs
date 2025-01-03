import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="bg-gray-50 py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ready to transform your space? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg bg-white p-8 shadow-md"
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-md bg-purple-600 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-700"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg bg-white p-8 shadow-md"
          >
            <div className="space-y-8">
              <a
                href="tel:+91 (040) 1234-5678"
                className="flex items-start space-x-4"
              >
                <Phone className="mt-1 h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 (040) 1234-5678</p>
                </div>
              </a>
              <a
                href="mailto:info@creativeinteriors.com"
                className="flex items-start space-x-4"
              >
                <Mail className="mt-1 h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">info@creativeinteriors.com</p>
                </div>
              </a>
              <a className="flex items-start space-x-4">
                <MapPin className="mt-1 h-6 w-6 text-purple-600" />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">
                    123 Design Street, Jubilee Hills
                    <br />
                    Hyderabad, Telangana 500033
                  </p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
