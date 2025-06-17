import React from 'react'; // Make sure React is imported if this is a standalone component

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        {/* Terms & Conditions Link */}
        <a
          href="/terms-and-conditions" // Replace with the actual path or URL to your terms
          target="_blank"             // Opens in a new tab (optional, but common for policy links)
          rel="noopener noreferrer"   // Security best practice for target="_blank"
          className="hover:underline" // Add TailwindCSS class for hover effect
        >
          Terms & Conditions
        </a>
        <p>|</p>
        {/* Privacy Policy Link */}
        <a
          href="/privacy-policy" // Replace with the actual path or URL to your privacy policy
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Privacy Policy
        </a>
      </div>

      <div className="flex gap-3">
        {/* GitHub Link */}
        <a
          href="https://github.com/yourusername" // Replace with your actual GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon" // Keep your existing social-icon class
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        {/* Twitter Link */}
        <a
          href="https://twitter.com/yourusername" // Replace with your actual Twitter profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>

        {/* Instagram Link */}
        <a
          href="https://instagram.com/yourusername" // Replace with your actual Instagram profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© Thomas. All rights reserved.</p>
    </footer>
  );
};

export default Footer;