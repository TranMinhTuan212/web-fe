
const message = {
  IS_NUMBER: "Vui lòng nhập chữ số !!",
  NOT_EMPTY: "Trường này không được để trống !!",
  MAX_30: "Độ dài tối đa là 30 kí tự, vui lòng kiểm tra lại !!",
  MAX_50: "Độ dài tối đa là 50 kí tự, vui lòng kiểm tra lại !!",
  MAX_100: "Độ dài tối đa là 100 kí tự, vui lòng kiểm tra lại !!",
  MIN_SIZE: "Độ dài tối thiểu là 6 kí tự, vui lòng kiểm tra lại !!",
  IS_CATEGORY: "Chọn danh mục !!",
  FILE_FORMAT: "file không hợp lệ !!",
  IS_EMAIL: "Email không hợp lệ !",
  CONFIRM_PASSWORD: "Xác nhận mật khẩu không hợp lệ !",
  IS_PHONE: "Sô điện thoại không hợp lệ !"
}

const ERole = {
  customer: "CUSTOMER",
  admin: "ADMIN",
};

const EOrderStatus = {
  waitingApprove: 'WAITING_APPROVE',
  delivering: 'DELIVERING',
  cancelled: 'CANCELLED',
  delivered: 'DELIVERED'
}

const OrderStatusList = [
  { label: 'Tất cả', value: 'ALL' },
  { label: 'Chờ xác nhận', value: 'WAITING_APPROVE' },
  { label: 'Đang giao', value: 'DELIVERING' },
  { label: 'Đã hủy', value: 'CANCELLED' },
  { label: 'Đã nhận', value: 'DELIVERED' }
]

export {
  ERole,
  message,
  EOrderStatus,
  OrderStatusList
};

