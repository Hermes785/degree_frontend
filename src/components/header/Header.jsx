import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import axios from "axios";
import Config from "../Settings/config";
import jwt_decode from 'jwt-decode';

const Header = () => {
  const menuRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [successMessage, setSuccessMessage] = useState('')
  const token = localStorage.getItem('token');

  const navLinks = [
    {
      display: "Accueil",
      url: '/'
    },
    {
      display: "A propos",
      url: "#",
    },
    {
      display: "Formation",
      url: "#",
    },
    {
      display: "Emplois",
      url: "#",
    },
    {
      display: "Blog",
      url: "#",
    },
  ];
  const { accessToken } = useParams();
  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("token", accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const decodedToken = jwt_decode(token);
          const userId = decodedToken.userId;
          axios
            .get(`${Config.url_by_id}/${userId}`)
            .then((response) => {
              setUser(response.data);
              setSuccessMessage(response.data.message);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token, accessToken]);

  //const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      {successMessage && <h2 className="alert alert-success">{successMessage}</h2>}
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i style={{ color: "#17bf92" }} className="ri-pantone-line"></i>Graduate education.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={() => menuRef.current.classList.toggle("active__menu")}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              {localStorage.getItem('token') ? (
                <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                  <DropdownToggle className="btn-success" caret>
                    <i className="ri-user-line"></i>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>{user.name}</DropdownItem>
                    <DropdownItem><i className="ri-add-line"></i> Ajouter une formation</DropdownItem>
                    <DropdownItem><i className="ri-settings-3-line"></i> Modifier le compte</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={handleLogout}><i className="ri-logout-circle-line"></i> Déconnexion</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <p className="mb-0 d-flex align-items-center gap-2">
                  <Button className="btn btn-success">
                    <Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>
                      Sign in
                    </Link>
                  </Button>
                  <Button className="btn btn-success">
                    <Link to={"/registration"} style={{ textDecoration: "none", color: "white" }}>
                      Create Account
                    </Link>
                  </Button>
                </p>
              )}
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i style={{ color: "#17bf92" }} className="ri-menu-line" onClick={() => menuRef.current.classList.toggle("active__menu")}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
