import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 lg:p-8"
    >
      <div className="w-full max-w-3xl text-center px-4">
        <motion.div
          initial={{ scale: 0, rotateZ: -10 }}
          animate={{ scale: 1, rotateZ: 0 }}
          transition={{ 
            delay: 0.2, 
            type: "spring", 
            stiffness: 100,
            damping: 10
          }}
          className="relative"
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white mb-4 relative z-10">
            <span className="inline-block hover:animate-bounce">4</span>
            <span className="inline-block hover:animate-bounce mx-2">0</span>
            <span className="inline-block hover:animate-bounce">4</span>
          </h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 blur-3xl bg-indigo-500 rounded-full -z-10"
          />
        </motion.div>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-6 md:space-y-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-4">
            Oops! Page not found
          </h2>
          
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to another URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Back to Home
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-6 py-3 border-2 border-gray-500 hover:border-gray-400 text-gray-300 hover:text-white rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Go Back
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Error;