import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [pathname, setPathname] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/">
            <p className={pathname === '/' ? 'selected' : ''}>Listagem</p>
          </Link>
          <Link to="/import">
            <p className={pathname === '/import' ? 'selected' : ''}>Importar</p>
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
