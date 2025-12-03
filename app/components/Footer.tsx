export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-main text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Mission */}
          <div className="md:col-span-1">
            <img 
              src="/reallogo.png" 
              alt="Sentinel" 
              className="h-6 mb-3 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              The future of work, tailored automation for the back office.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#product" className="hover:text-white transition-colors">Product</a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">Security</a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
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
                <a href="#contact" className="hover:text-white transition-colors">Request Demo</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#documentation" className="hover:text-white transition-colors">Documentation</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#legal" className="hover:text-white transition-colors">Legal</a>
              </li>
              <li>
                <a href="#trademark" className="hover:text-white transition-colors">Trademark</a>
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
