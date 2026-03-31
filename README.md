 Giới thiệu đề tài
Dự án QTravel là một ứng dụng web hiện đại giúp số hóa quy trình tư vấn và đặt tour du lịch. Thay vì quản lý thủ công, hệ thống cho phép tự động hóa việc lưu trữ dữ liệu khách hàng và lịch trình tour.

 Cấu trúc thư mục dự án (Project Structure)
Để đảm bảo tính bảo trì và mở rộng, dự án được tổ chức như sau:

server.js: File thực thi chính, khởi tạo Server Express và kết nối Database.

package.json: Quản lý các thư viện (express, pg, dotenv...).

database/qtravel.sql: Chứa cấu trúc bảng tours, users, bookings, subscribers.

routes/:

auth.js: Xử lý Đăng ký/Đăng nhập.

admin.js: Xử lý thêm/sửa/xóa Tour và quản lý đơn hàng.

user.js: Xử lý xem tour và gửi yêu cầu đặt tour.

 THU THẬP VÀ PHÂN TÍCH YÊU CẦU
Yêu cầu chức năng
Khách hàng: Tìm kiếm tour, xem chi tiết lịch trình, đăng ký nhận bản tin, đặt tour trực tuyến.
Quản trị viên: Quản lý kho tour (CRUD), quản lý danh sách email tư vấn, duyệt đơn đặt tour.
