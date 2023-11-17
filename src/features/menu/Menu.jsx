import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../api/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  // Tìm nạp dữ liệu khi truy cập vào tuyến đường mennu
  const menu = useLoaderData();

  return (
    <ul className="devide-y devide-stone-200 px-2">
      {menu.map((el) => (
        <MenuItem pizza={el} key={el.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
