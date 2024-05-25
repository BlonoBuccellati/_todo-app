import './Sidebar.css';
import SidebarItem from './SidebarItem';
const Sidebar = () => {
  return (
    <aside className='flex'>
      <div className='w-64 bg-gray-800 h-screen py-4 px-6'>
        <div className='text-white text-lg font-semibold'>TO-DO</div>
        <SidebarItem />
      </div>
    </aside>
  );
};
export default Sidebar;
