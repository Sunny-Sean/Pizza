import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  // Trả về một dối tượng chứa trạng thái, location ...
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="layout grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />

      <div className="anscroll overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* Hiển thị nội dung của các trang */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
