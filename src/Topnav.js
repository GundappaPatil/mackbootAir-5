import "./App.css";

export default function Topnav() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <input
              className="navbar-brand"
              placeholder="find by name or phone number"
            ></input>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Gender
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Female
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Male
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Member Status
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarScrollingDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Active Member
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarScrollingDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Inactive Member
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      ;
    </>
  );
}
