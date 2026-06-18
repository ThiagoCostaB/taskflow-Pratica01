import { Link } from "react-router-dom";

function Navbar() {

  return (
    <header className="main-header">

      <h1 className="logo">
        TaskFlow
      </h1>

      <nav className="main-nav">

        <ul>

          <li>
            <Link to="/">Início</Link>
          </li>

          <li>
            <Link to="/cadastro">Cadastro</Link>
          </li>

          <li>
            <Link to="/listagem">Listagem</Link>
          </li>

          <li>
  <Link to="/sobre">Sobre</Link>
</li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;