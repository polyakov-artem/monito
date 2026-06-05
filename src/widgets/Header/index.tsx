import { useEffect, useState, type FC, type MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from '@/shared/ui/Logo';
import clsx from 'clsx';
import { routerPaths } from '@/shared/config/routes';
import { Button } from '@/shared/ui/Button';
import { Burger } from '@/shared/ui/Burger';
import './index.scss';
import { ModalSearchBtn, SearchForm } from '@/features/searchProduct';
import { Dropdown } from '@/shared/ui/Dropdown';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import type { PropsWithClassName } from '@/shared/types/types';

const navLinks = [
  { title: 'Home', path: routerPaths.home },
  { title: 'Category', path: routerPaths.category },
];

const STAY_OPEN_ATTRIBUTE = 'data-menu-stay-open';

const currencyOptions = [
  {
    value: 'VND',
    label: 'VND',
    icon: <SvgIcon iconId="flag" />,
  },
];

export const Header: FC<PropsWithClassName> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick: MouseEventHandler<HTMLElement> = e => {
    if (isMenuOpen && !(e.target as HTMLElement).closest(`[${STAY_OPEN_ATTRIBUTE}]`)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <>
      <header
        onClick={handleMenuClick}
        className={clsx('header', isMenuOpen && 'header_menu-open', className)}
      >
        <div className={`header__container container`}>
          <ModalSearchBtn className="header__search-btn" />

          <Logo className="header__logo" />
          <Burger className="header__burger" onClick={handleBurgerClick} isOpen={isMenuOpen} />

          <div className="header__menu-wrapper">
            <div className="header__menu">
              <nav className={`header__nav`}>
                {navLinks.map(page => (
                  <NavLink
                    key={page.title}
                    className={({ isActive }) =>
                      clsx(`header__nav-link`, {
                        [`header__nav-link_current`]: isActive,
                      })
                    }
                    to={page.path}
                  >
                    {page.title}
                  </NavLink>
                ))}
              </nav>

              <SearchForm className="header__search" scale="l" rounded="pill" />

              <Button
                view="default"
                as="link"
                rounded="pill"
                to={'#'}
                theme="primary"
                scale="m"
                className="header__join-btn"
              >
                Join the community
              </Button>

              <Dropdown
                view="ghost"
                theme="primary"
                scale="m"
                defaultValue="VND"
                options={currencyOptions}
                data-menu-stay-open="true"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
