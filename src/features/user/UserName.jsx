import { useSelector } from 'react-redux';

function UserName() {
  // Đọc dữ liệu từ kho lưu trữ store : Lấy username từ đó
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default UserName;
