export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-main text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Mission */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-3">Sentinel</div>
            <p className="text-gray-400 text-sm">
              AI-powered audit assistant for internal compliance teams.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#product" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">Security</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#resources" className="hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">Status</a>
              </li>
              <li>
                <a href="#resources" className="hover:text-white transition-colors">Support</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Sentinel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
