import { NavLinks } from './NavLinks';
import { Submenu } from './Submenu';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../Context';

function Navbar() {
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-center'>
          <h3 className='logo'>strapi</h3>
          <NavLinks />
          <button className='toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <Submenu />
      </nav>
    </>
  );
}

export default Navbar;
