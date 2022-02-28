const Header = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='/'>
          Game Culture
        </a>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav' id='test'>
            <a className='nav-item nav-link active' href='/'>
              Home 
            </a>
            <a className='nav-item nav-link' href='/about'>
              About
            </a>
            <a className='nav-item nav-link' href='/test'>
              Best Games
            </a>
            <a className='nav-item nav-link' href='/test'>
             Buy
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
