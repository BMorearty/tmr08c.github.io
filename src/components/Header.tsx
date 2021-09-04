import { Link } from "gatsby";
import * as React from "react";

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.SFC<HeaderProps> = ({ siteTitle }) => (
  <nav className="flex items-center justify-between flex-wrap bg-green-800 px-6 py-12 mb-5 text-white">
    <div className="flex flex-no-shrink">
      <Link to="/" className="font-semibold text-4xl tracking-tighter">
        {siteTitle}
      </Link>
    </div>
    <div className="justify-end flex mr-4">
      <div className="text-xl">
        <Link to="/talks" className="mr-6">
          Talks
        </Link>

        <Link to="/blog">Blog</Link>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
