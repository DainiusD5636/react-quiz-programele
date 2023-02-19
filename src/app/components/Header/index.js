import "./index.css";

function Header({ src }) {
  return (
    <header>
      <div className="Header-top">
        <img src={src} target="_blank" alt="" />
      </div>
    </header>
  );
}

export default Header;
