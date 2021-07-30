const Footer = ({pressed}) => {
    return ( 
        <footer>
        <ul>
          <li className="footerLink">
            <a href="https://github.com/saadahmadhere/">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="footerLink">
            <a href="https://twitter.com/imsaadahmad">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="footerLink">
            <a href="https://www.linkedin.com/in/saadahmadhere/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="footerLink">
            <a href="https://saadahmad.netlify.app/">
              <i className="fas fa-briefcase"></i>
            </a>
          </li>
        </ul>

        <div className="legacyText">
          © 2021 | saadA |{" "}
          <a
            href="#alertBox"
            onClick={pressed}
            style={{ cursor: "pointer", color: "Black" }}
          >
            Privacy Policy
          </a>
        </div>
      </footer>
     );
}
 
export default Footer;