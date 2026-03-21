export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">SOLCEF</h3>
            <p className="text-sm">
              Spirit Of Life Community Empowerment Foundation is a 501(c)(3)
              nonprofit organization dedicated to empowering communities in
              Haiti through education.
            </p>
            <p className="text-sm mt-2 text-gray-400">EIN: 45-5611617</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/school" className="hover:text-white transition-colors">The School</a></li>
              <li><a href="/sponsor" className="hover:text-white transition-colors">Sponsor a Student</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Lauderhill, FL</li>
              <li>
                <a href="mailto:info@solcef.org" className="hover:text-white transition-colors">
                  info@solcef.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Spirit Of Life Community Empowerment Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
