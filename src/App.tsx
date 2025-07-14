import React from 'react';
import { ArrowRight, Github, Twitter, Mail, ExternalLink, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-slate-900">
              Aylin.dev
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Projects</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Info</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors duration-200">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Github className="w-5 h-5 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors duration-200" />
              <Twitter className="w-5 h-5 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors duration-200" />
              <Mail className="w-5 h-5 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors duration-200" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Split Screen */}
      <section className="pt-20 min-h-screen flex">
        {/* Left Half - Text Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-lg">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-8">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-700 text-sm font-medium">...</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aylin Muzaffarli
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              ...
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center hover:bg-slate-800 transition-all duration-200 transform hover:scale-105">
                ...
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:border-slate-400 hover:text-slate-900 transition-all duration-200">
                ...
              </button>
            </div>
          </div>
        </div>

        {/* Right Half - Visual Content */}
        <div className="hidden lg:block w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 bg-purple-200/30 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300/40 rounded-lg rotate-45"></div>
          
          {/* Placeholder for Images */}
          <div className="absolute inset-8 flex flex-col space-y-6">
            <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg flex items-center justify-center">
              <span className="text-slate-400 font-medium">...</span>
            </div>
            <div className="flex space-x-6 h-32">
              <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex items-center justify-center">
                <span className="text-slate-400 text-sm">...</span>
              </div>
              <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex items-center justify-center">
                <span className="text-slate-400 text-sm">...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">...</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">...</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <span className="text-slate-400">...</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">...</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">...</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">...</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors duration-200" />
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <span className="text-slate-400">...</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">...</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">...</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">...</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors duration-200" />
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <span className="text-slate-400">...</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">...</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">...</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">...</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-green-600 transition-colors duration-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Info</h2>
            <button className="text-blue-600 hover:text-blue-700 flex items-center transition-colors duration-200">
              <span className="mr-2">...</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Info */}
            <div className="md:col-span-2 group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">...</h3>
                  <p className="text-slate-600">...</p>
                </div>
                <div className="flex items-center text-slate-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>...</span>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">...</p>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">...</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">...</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>

            {/* Info Card 1 */}
            <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">...</h3>
                <span className="text-slate-500 text-sm">...</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">...</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">...</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-200">...</h3>
                <span className="text-slate-500 text-sm">...</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">...</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">...</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">...</h2>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">...</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-200 transform hover:scale-105">
              ...
            </button>
            <button className="border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-xl font-semibold hover:border-slate-500 hover:text-white transition-all duration-200">
              ...
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 mb-4 md:mb-0">
              © 2025 Aylin.dev — ...
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">...</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">...</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">...</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
