import { useGlobalContext } from '../Context';
import { FaTimes } from 'react-icons/fa';
import SidebarLinks from './SidebarLinks';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={isSidebarOpen ? 'sublinks-modal show-modal' : 'sublinks-modal'}
    >
      <button className='close-btn' onClick={closeSidebar}>
        <FaTimes />
      </button>
      <SidebarLinks />
    </div>
  );
}

export default Sidebar;
