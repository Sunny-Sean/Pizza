import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../api/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    // Cập nhật dữ liệu mà không cần điều hướng
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// Xác nhận lại dữ liệu và hiển thị lại trang
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderID, data);
  return null;
}
