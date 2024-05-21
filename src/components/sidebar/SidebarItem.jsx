const taskType = ['task', 'important', 'completed'];
const SidebarItem = () => {
  return (
    <>
      <ul className='mt-4'>
        {taskType.map((type) => (
          <li key={type} className='block text-gray-400 hover:text-white'>
            {type}
          </li>
        ))}
      </ul>
    </>
  );
};
export default SidebarItem;
