export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 px-6 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Help</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
        </div>
        <div className="text-sm text-gray-500">
          © 2024 FocusFlow. Made with ❤️ for productivity
        </div>
      </div>
    </footer>
  );
};