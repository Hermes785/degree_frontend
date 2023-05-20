import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "reactstrap";
//import jwt from "jsonwebtoken";
import axios from "axios";
import Config from "../Settings/config";
import jwt_decode from 'jwt-decode';
console.log(Config)
const navLinks = [
  {
    display: "Accueil",
    url: "/",
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

const Header = () => {
  const menuRef = useRef();
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const { userId } = useParams();

  
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const userId = decodedToken.userId;
        console.log(userId);
        axios.get(`${Config.url_by_id}/${userId}`)
          .then(response => {
            setUser(response.data);
            console.log('Informations de l\'utilisateur:', response.data);
          })
          .catch(error => console.log('Erreur lors de la récupération des informations de l\'utilisateur:', error));
      } catch (error) {
        console.log(error);
      }
    }
  }, [token, userId]);
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i style={{ color: "#17bf92" }} className="ri-pantone-line"></i>Graduate education.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
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
                <p className="mb-0 d-flex align-items-center gap-2">
                  <span className="badge bg-success">{user.name}</span>

                  <Button className="btn btn-success" onClick={handleLogout}>
                    Logout
                  </Button>
                </p>
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
              <i style={{ color: "#17bf92" }} className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
