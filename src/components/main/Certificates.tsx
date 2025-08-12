"use client"
import { certificates } from "../../../utils/constants";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt, FaBuilding } from "react-icons/fa";

export default function Certificates() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="certificates" className="w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            My Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Validations of my expertise and commitment to continuous learning in the tech industry.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mr-4">
                    <FaCertificate className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{certificate.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {certificate.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <FaBuilding className="mr-2" />
                  <span>{certificate.issuer}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <FaCalendarAlt className="mr-2" />
                  <span>{new Date(certificate.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {certificate.technologies.slice(0, 4).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {certificate.technologies.length > 4 && (
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      +{certificate.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  View Certificate
                  <FaExternalLinkAlt className="ml-2 text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}