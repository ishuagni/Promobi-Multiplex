import React from 'react';
import {Nav} from 'react-bootstrap';
import {useHistory, useLocation} from 'react-router-dom';

import Avatar from '../Avatar';

import Logo from '../../assets/images/promobi_logo.png';
import LogOut from '../../assets/svg/logout.svg';

import {removeToken} from '../../utils/service';

import './styles.scss';

const {Item: NavItem} = Nav;

/**
 * Top Bar Component
 * @constructor
 */
function TopBar({user_name, current_page, current_path}) {
  const history = useHistory();
  const {pathname} = useLocation();

  const logOutHandler = () => {
    removeToken()
    history.push('/');
  }

  return (
    <div className="nav-container">
      <Nav defaultActiveKey="/" as="ul" className="navbar">
        <NavItem as="li">
          <img className="topbar-logo" src={Logo} alt="logo" />
        </NavItem>
        {pathname !== '/' ? (
          <NavItem as="li" className="topbar-mid">
            <div
              className={[
                'bar-tab',
                pathname === current_path ? 'bar-tab-active' : '',
              ].join(' ')}
              onClick={() => {
                if (pathname !== current_path) history.push(current_path);
              }}>
              {current_page}
            </div>
          </NavItem>
        ) : null}
        <NavItem as="li" className="nav-item-custom">
          {pathname !== '/' ? (
            <>
                    <Avatar
                      name={user_name}
                    />
                    <a className="logout-anchor" href="/" onClick={logOutHandler}>
                      <img
                        src={LogOut}
                        className="topbar-logout"
                        alt="logout"
                      />
                    </a>
                </>
          ) : (
            <span className="topbar-login">Login</span>
          )}
          {/* Locale Selector */}
        </NavItem>
      </Nav>
    </div>
  );
}

export default TopBar;
