import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Vote, UserPlus } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Vote className="h-8 w-8" />
              <span className="font-bold text-xl">Politique Accessible</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-indigo-500 px-3 py-2 rounded-md">Accueil</Link>
              <Link to="/articles" className="hover:bg-indigo-500 px-3 py-2 rounded-md">Articles</Link>
              <Link to="/questions" className="hover:bg-indigo-500 px-3 py-2 rounded-md">Questions</Link>
              <Link to="/calendrier" className="hover:bg-indigo-500 px-3 py-2 rounded-md">Calendrier</Link>
              <Link to="/participer" className="hover:bg-indigo-500 px-3 py-2 rounded-md">Participer</Link>
              <Link to="/partipri" className="hover:bg-indigo-500 px-3 py-2 rounded-md">PartiPri</Link>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-md flex items-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>S'inscrire</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">Accueil</Link>
            <Link to="/articles" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">Articles</Link>
            <Link to="/questions" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">Questions</Link>
            <Link to="/calendrier" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">Calendrier</Link>
            <Link to="/participer" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">Participer</Link>
            <Link to="/partipri" className="block hover:bg-indigo-500 px-3 py-2 rounded-md">PartiPri</Link>
            <button className="w-full mt-4 bg-white text-indigo-600 px-4 py-2 rounded-md flex items-center justify-center space-x-2">
              <UserPlus className="h-4 w-4" />
              <span>S'inscrire</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;