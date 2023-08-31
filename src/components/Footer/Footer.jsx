import "./Footer.scss";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="footer">
        <footer>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Home</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Privacy policy</a>
            </li>
          </ul>
          <div className="social">
            <a href="https://www.github.com/apl09/">
              {" "}
              <Icon icon="ion:logo-github" />
            </a>
            <a href="https://www.linkedin.com/in/adri%C3%A1n-pastor-l%C3%B3pez-0598bb282/">
              <Icon icon="ion:logo-twitter" />
            </a>
            <a href="https://www.linkedin.com/in/adri%C3%A1n-pastor-l%C3%B3pez-0598bb282/">
              <Icon icon="ion:logo-facebook" />
            </a>
            <a href="https://www.linkedin.com/in/adri%C3%A1n-pastor-l%C3%B3pez-0598bb282/">
              <Icon icon="ion:logo-linkedin" />
            </a>
          </div>

          <p className="copyright">
            {" "}
            Created by Adrián Pastor López Copyright © 2023 . All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
