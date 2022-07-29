import { memo } from 'react';
import './style.css';

const Header = memo(() => {
  return (
    <header id="header">
      <div className="header-container">
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                最新消息
              </a>
            </li>
          </ul>
          <a href="/" className="logo">
            ALPHA Shop
          </a>
        </nav>
      </div>
    </header>
  );
});

export default Header;
