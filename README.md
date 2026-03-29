NGÔN NGỮ ĐƯỢC DÙNG
 HTML5 – xây dựng cấu trúc trang web 
 CSS3 – thiết kế giao diện và bố cục trang 
 JavaScript – xử lý logic và tương tác người dùng 
 LocalStorage API – lưu trữ dữ liệu phía client 
 SVG – hiển thị đồ họa (tracking đơn hàng, icon) 

TÍNH NĂNG CHÍNH
 1. Single Page Application (SPA)
  Điều hướng bằng hash (#) 
  Không cần reload trang 
  Menu active tự động cập nhật
 2. Hệ thống Đăng ký / Đăng nhập
  Tạo tài khoản người dùng 
  Đăng nhập hệ thống 
  Lưu phiên đăng nhập 
  Dữ liệu được lưu riêng theo từng tài khoản bằng LocalStorage 
 3. Đặt tour (Giỏ hàng)
  Thêm tour vào danh sách đặt 
  Cập nhật số lượng người tham gia 
  Tính tổng chi phí theo thời gian thực 
  Xác nhận đặt tour (checkout) 
 4. Tính phí dịch vụ & vận chuyển
  Chọn hình thức di chuyển (máy bay, xe khách, tự túc) 
  Hiển thị chi phí phát sinh 
  Hiển thị thời gian khởi hành dự kiến 
  Tính tổng chi phí cuối cùng 
 5. Quản lý đơn đặt tour
  Lưu lịch sử đặt tour 
  Theo dõi trạng thái (đã đặt, đang xử lý, hoàn thành) 
  Hiển thị tiến trình xử lý đơn 
  Sử dụng SVG để minh họa trạng thái 
 6. Tìm kiếm tour
  Tìm kiếm theo tên tour hoặc địa điểm 
  Lưu lịch sử tìm kiếm 
  Dữ liệu tìm kiếm được lưu riêng theo từng tài khoản 
 7. Chat Bot hỗ trợ khách hàng
  Chat bot tự động phản hồi theo từ khóa:
  Giá tour 
  Thời gian khởi hành 
  Chính sách hoàn tiền 
  Khuyến mãi 
  Liên hệ 
  Tính năng bổ sung:
  Lưu lịch sử chat theo từng tài khoản 
  Hỗ trợ gửi emoji 
  Hỗ trợ gửi hình ảnh (có nén để tiết kiệm dung lượng) 

CƠ CHẾ LƯU TRỮ
 Dữ liệu được lưu bằng LocalStorage trên trình duyệt:
 tour_chat_messages – lưu tin nhắn chatbot 
 tour_cart – lưu danh sách tour đã chọn 
 tour_orders – lưu đơn đặt tour 
 tour_last_order – lưu đơn gần nhất 
 tour_search_history – lưu lịch sử tìm kiếm 
 Nếu người dùng đăng nhập, các key sẽ được gắn thêm email để phân biệt dữ liệu giữa các tài khoản.

KẾT LUẬN
 Dự án đã xây dựng thành công một hệ thống website đặt tour du lịch với các chức năng cơ bản như:
 Xem và tìm kiếm tour 
 Đặt tour và quản lý đơn hàng 
 Tương tác với chatbot 
 Hệ thống tuy đơn giản nhưng đáp ứng được nhu cầu cơ bản của người dùng và có thể mở rộng thêm trong tương lai như:
 Kết nối cơ sở dữ liệu thật (MySQL) 
 Thanh toán online 
 Triển khai backend hoàn chỉnh 
