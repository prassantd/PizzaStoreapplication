import { Link } from "react-router-dom";
import "./Home.css";

function Main() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Bella pizza</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/display">menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/update">update</Link>
              </li> <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/add">add</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/delete">delete</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      
    </>
  );
}

export default Main;
