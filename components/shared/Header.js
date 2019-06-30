import React from "react";
import Link from "next/link";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const BootstrapNavLink = props => {
  const { route, title } = props;
  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

// const BootstrapNavLink = props => {
//   const { route, title } = props;
//   return (
//     <NavLink
//       to={route}
//       className="nav-link port-navbar-link"
//       // activeClassName="activeLink"
//     >
//       {title}
//     </NavLink>
//   );
// };

const Login = () => {
  return <span className="nav-link port-navbar-link clickable">Login</span>;
};

const Logout = () => {
  return <span className="nav-link port-navbar-link clickable">Logout</span>;
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          className="port-navbar port-default absolute"
          color="transparent"
          dark
          expand="md"
        >
          <NavbarBrand className="port-navbar-brand" href="/">
            Junnel Teves
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BootstrapNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BootstrapNavLink route="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BootstrapNavLink route="/portfolios" title="Portfolios" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BootstrapNavLink route="/blogs" title="Blogs" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BootstrapNavLink route="/cv" title="CV" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <Login />
              </NavItem>
              <NavItem className="port-navbar-item">
                <Logout />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
