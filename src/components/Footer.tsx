import React from 'react';
import { Link } from 'react-router-dom';
import { Vote, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Vote className="h-8 w-8" />
              <span className="font-bold text-xl">Politique Accessible</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Rendons la politique accessible à tous les citoyens.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
              <li><Link to="/articles" className="text-gray-400 hover:text-white">Articles</Link></li>
              <li><Link to="/explorer" className="text-gray-400 hover:text-white">Explorer</Link></li>
              <li><Link to="/calendrier" className="text-gray-400 hover:text-white">Calendrier</Link></li>
              <li><Link to="/participer" className="text-gray-400 hover:text-white">Participer</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Guide du débutant</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Accessibilité</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mentions légales</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:contact@politique-accessible.fr" className="text-gray-400 hover:text-white">
                  contact@politique-accessible.fr
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">01 23 45 67 89</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Politique Accessible. Tous droits réservés.</p>
          <p>CHIHAB DEME BALAMON ANDRIANARIJAONA AMZIANE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;