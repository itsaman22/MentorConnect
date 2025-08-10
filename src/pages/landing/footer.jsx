import { 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  Globe,
  Book,
  Users,
  Shield,
  HelpCircle
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MentorConnect</h3>
            <p className="text-gray-400 text-sm mb-4">
              Empowering careers through personalized mentorship and expert guidance.
            </p>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* For Learners */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Learners</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Book size={16} />
                  <span>Find a Mentor</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Globe size={16} />
                  <span>Browse Categories</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Users size={16} />
                  <span>Group Sessions</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Shield size={16} />
                  <span>Success Stories</span>
                </a>
              </li>
            </ul>
          </div>

          {/* For Mentors */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Mentors</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Become a Mentor</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Mentor Resources</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Community Guidelines</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Success Stories</a>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <HelpCircle size={16} />
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  <span>contact@mentorconnect.com</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="max-w-md mx-auto text-center">
            <h5 className="text-lg font-semibold mb-2">Stay Updated</h5>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for expert tips and insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
          <p>© 2025 MentorConnect. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}