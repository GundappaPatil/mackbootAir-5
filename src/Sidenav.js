import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./icons/Mask group.svg";
import contact from "./icons/contact.png";
import file from "./icons/file.png";
import doc from "./icons/doc.png";
import page from "./icons/page.png";
import setting from "./icons/setting.png";
import next from "./icons/next.png";
import "./App.css";

export default function Sidenav() {
  return (
    <>
      <div className="item">
        <img src={logo} />
      </div>
      <div className="verticle">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              +
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src={contact} alt="contact" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src={file} alt="contact" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="/"
              tabindex="-1"
              aria-disabled="true"
            >
              <img src={doc} alt="doc" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="/"
              tabindex="-1"
              aria-disabled="true"
            >
              <img src={page} alt="page" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="/"
              tabindex="-1"
              aria-disabled="true"
            >
              <img src={setting} alt="setting" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="/"
              tabindex="-1"
              aria-disabled="true"
            >
              <img src={next} alt="next" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
