import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './CartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  // Tính tổng số lượng pizza có trong giỏ hàng
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPriceQuantity = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return;
  return (
    <div className="flex items-center justify-between bg-slate-500 px-4 py-4 text-sm uppercase text-cyan-100 sm:px-6 md:text-base">
      <p className="space-x-4 text-cyan-200 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalPriceQuantity)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
