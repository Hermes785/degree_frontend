import React, { useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
//import { useParams } from "react-router-dom";
import axios from "axios";
//import { useNavigate } from 'react-router-dom'


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
  
    //const [user, setUser] = useState('');
   // const { id } = useParams();
    //const history =useNavigate();
 
    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0',
      };
      const profileUrl = 'https://api.linkedin.com/v2/me';
       const urlToGetLinkedInAccessToken = 'https://www.linkedin.com/oauth/v2/accessToken';
       console.log(urlToGetLinkedInAccessToken)
    
      axios
        .get(profileUrl, { headers })
        .then((res) => {
          const { localizedFirstName, localizedLastName } = res.data;
          const fullName = `${localizedFirstName} ${localizedLastName}`;
          console.log(fullName);
        })
        .catch((err) => {
          console.error(err); 
        });
    
      })
  
   /*const handleLogout = () => {
      // Efface le token stocké dans le local storage
      localStorage.removeItem("accestoken");
      // Redirige l'utilisateur vers la page de connexion
      history.push("/login");
    };
*/

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i style={{ color: "#17bf92" }}class="ri-pantone-line"></i>Graduate education.
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
            
              <p className="mb-0 d-flex align-items-center gap-2">
                <i style={{ color: "#17bf92" }}class="ri-phone-lin"></i> <Button className="btn btn-success"><Link to={'/login'} style={{ textDecoration:'none',color:'white' }}>Sing in</Link></Button><Button className="btn btn-success"><Link to={'/registration'} style={{ textDecoration:'none',color:'white' }}>Create Account</Link></Button>
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i style={{ color: "#17bf92" }} class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
