import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-emerald-900 via-emerald-950 to-emerald-950 text-emerald-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center overflow-hidden">
                <img src="/images/logo-icon.png" alt="SOLCEF" className="w-6 h-6" />
              </div>
              <span className="text-lg font-bold text-white">SOLCEF</span>
            </Link>
            <p className="text-sm text-emerald-300/60 leading-relaxed mb-4">
              Spirit Of Life Community Empowerment Foundation. 501(c)(3) nonprofit
              dedicated to education in Haiti.
            </p>
            <p className="text-xs text-emerald-300/40">EIN: 45-5611617</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/school" className="hover:text-amber-400 transition-colors">The School</Link></li>
              <li><Link href="/sponsor" className="hover:text-amber-400 transition-colors">Sponsor a Student</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Sponsorship */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Sponsorship</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/sponsor" className="hover:text-amber-400 transition-colors">How It Works</Link></li>
              <li><Link href="/sponsor" className="hover:text-amber-400 transition-colors">Meet the Students</Link></li>
              <li><Link href="/sponsor" className="hover:text-amber-400 transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-amber-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                <a href="mailto:info@solcef.org" className="hover:text-amber-400 transition-colors">
                  info@solcef.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0">
                  <path fillRule="evenodd" d="M9.69 18.933l.001.001-.002.002-.001-.003a2.22 2.22 0 01-1.104-.582c-1.23-1.207-3.789-3.995-4.88-6.528-1.04-2.416-1.014-4.457.243-6.104A5.222 5.222 0 019.5 3.352c.83 0 1.627.218 2.306.618.297.176.655.155.92-.06a6.414 6.414 0 012.992-1.496c.459-.09.894.228.894.678 0 .267-.14.51-.357.643.543.103.996.326 1.383.637.382.307.68.69.894 1.128.09.186.11.4-.008.554-.118.154-.324.225-.527.169-.366-.1-.745-.155-1.134-.164-.742-.017-1.475.146-2.122.47l-3.18 1.59a1.5 1.5 0 00-.67.67l-1.59 3.18a4.066 4.066 0 00-.47 2.122c.009.389.064.768.164 1.134.056.203-.015.409-.169.527-.154.118-.368.098-.554-.008a3.358 3.358 0 01-1.128-.894 4.3 4.3 0 01-.637-1.383.63.63 0 00-.643-.357c-.342.057-.69.155-1.038.29-.371.145-.781.17-1.114.028z" clipRule="evenodd" />
                </svg>
                <span>Lauderhill, FL</span>
              </li>
            </ul>

            {/* EIN badge */}
            <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/50 border border-emerald-800 text-emerald-300 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Verified 501(c)(3)
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-emerald-800/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-emerald-300/40">
          <p>&copy; {year} SOLCEF. All rights reserved.</p>
          <p className="text-xs">
            Spirit Of Life Community Empowerment Foundation
          </p>
        </div>
      </div>
    </footer>
  );
}
