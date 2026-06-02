import { SubscribePanel } from '@/features/subscribe';
import { routerPaths } from '@/shared/config/routes';
import { Logo } from '@/shared/ui/Logo';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import { Link } from 'react-router-dom';
import './index.scss';

const navLinks = [
  { title: 'Home', path: routerPaths.home },
  { title: 'Category', path: routerPaths.category },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <SubscribePanel className="footer__subscribe" />
          <div className="footer__nav">
            {navLinks.map(page => (
              <Link key={page.title} className="footer__nav-link" to={page.path}>
                {page.title}
              </Link>
            ))}
          </div>

          <div className="footer__socials">
            <a className="footer__social-link" href="#">
              <SvgIcon iconId="facebook" />
            </a>
            <a className="footer__social-link" href="#">
              <SvgIcon iconId="twitter" />
            </a>
            <a className="footer__social-link" href="#">
              <SvgIcon iconId="instagram" />
            </a>
            <a className="footer__social-link" href="#">
              <SvgIcon iconId="youtube" />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2022 Monito. All rights reserved.</p>
          <Logo className="footer__logo" />
          <div className="footer__bottom-links">
            <a className="footer__bottom-link" href="#">
              Terms of Service
            </a>
            <a className="footer__bottom-link" href="#">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
