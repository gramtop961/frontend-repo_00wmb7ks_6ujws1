export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold text-gray-900">PromptMart</h4>
          <p className="mt-2 text-gray-600">A marketplace for high-quality prompts that help you get more done with AI.</p>
        </div>
        <div>
          <h5 className="font-medium text-gray-900">Marketplace</h5>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">All Prompts</a></li>
            <li><a href="#" className="hover:text-gray-900">Top Sellers</a></li>
            <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-900">For Creators</h5>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Sell Prompts</a></li>
            <li><a href="#" className="hover:text-gray-900">Creator Guidelines</a></li>
            <li><a href="#" className="hover:text-gray-900">Payouts</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-900">Company</h5>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} PromptMart. All rights reserved.</p>
          <p>Made with ❤️ for creators</p>
        </div>
      </div>
    </footer>
  );
}
