import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#4e154b] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Why Slack?</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">About Us</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Features</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Enterprise</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Security</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Pricing</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Integration</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Solutions</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Documentation</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Help Center</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Partners</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Community</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Developer API</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Blog</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Careers</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">Contact Sales</Link></li>
              <li><Link to="/" className="text-white/90 hover:text-white hover:underline">News</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/90">
              © 2024 Slack Technologies, LLC, a Salesforce company. 
              All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link to="/" className="text-white/90 hover:text-white hover:underline">Status</Link>
              <Link to="/" className="text-white/90 hover:text-white hover:underline">Privacy</Link>
              <Link to="/" className="text-white/90 hover:text-white hover:underline">Terms</Link>
              <Link to="/" className="text-white/90 hover:text-white hover:underline">Cookie Preferences</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer