export const transValidation = {
    email_incorrect: "Email phải có dạng example@gmail.com",
    gender_incorrect: "Bạn không thể sửa giới tính",
    password_incorrect: "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt ",
    password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác",
};

export const transErrors = {
    account_in_use: "Email này đã được sử dụng",
    account_removed:"Tài khoản này đã bị gỡ khỏi hệ thống, nếu tin rằng điều này là hiểu nhầm, vui lòng liên hệ với bộ phận hỗ trợ viên của chúng tôi",
    account_not_active:"Email này đã được đăng ký, nhưng tài khoản chưa được kích hoat, vui lòng kiểm tra lại email hoặc liên hệ với bộ phận hỗ trợ viên của chúng tôi",
    token_undefined:"Token không tồn tại!",
    login_failed:"Sai tài khoản hoặc mật khẩu!",
    server_error: "Có lỗi ở phía server, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi để báo cáo lỗi"
};

export const transSuccess = {
    userCreated: (userEmail) => {
        return `Tài khoản <strong> ${userEmail} </strong> đã được tạo, vui lòng kiểm tra email của bạn để kích hoạt tài khoản, xin cảm ơn!`
    },
    account_actived: "Kích hoạt tài khoản thành công, bạn có thể đăng nhập vào ứng dụng ngay bây giờ.",
    loginSuccess: (username) => {
        return `Xin chào ${username}, Chúc bạn một ngày tốt lành`
    },
    logout_success: "Đăng xuất tài khoản thành công"
};

export const transMail = {
    subject: "Imessager: Xác nhận kích hoạt tài khoản",
    template: (linkVerify) => {
        return `
        <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên ứng dụng Imessager</h2>
        <h3>Vui lòng click vào liên kết bên dưới để kích hoạt tài khoản</h3>
        <h3><a href="${linkVerify}" target="blank">${linkVerify} </a></h3>
        <h4>Nếu tin rằng email này là nhầm lẫn, hay bỏ qua nó. Xin cảm ơn</h4>
    `;
    },
    send_failed: "Có lỗi trong quá trình gửi email, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi"
}