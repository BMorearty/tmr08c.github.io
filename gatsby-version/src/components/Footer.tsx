import { Link } from 'gatsby'
import * as React from 'react'

const Footer: React.SFC = () => (
  <div className="flex py-4 bg-living-coral-500">
    <ul className="flex-grow pl-5 text-gray-800 my-auto">
      <li>
        <Link to="/" className="hover:text-white">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog" className="hover:text-white">
          Blog
        </Link>
      </li>
    </ul>
    <ul className="flex-grow flex justify-end pr-5 my-auto">
      <li className="">
        <a href="https://github.com/tmr08c/" target="blank">
          {/* GitHub Logo SVG generated from Jekyll version of blog */}
          <svg viewBox="0 0 16 16" className="w-6 h-6">
            <path
              fill="#2d3748"
              d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
)
export default Footer
