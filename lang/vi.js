export const transValidation = {
    email_incorrect: "Email phải có dạng example@gmail.com",
    gender_incorrect: "Bạn không thể sửa giới tính",
    password_incorrect: "Mật khẩu phải chứa ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt ",
    password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác",
};

export const transErrors = {
    account_in_use: "Email này đã được sử dụng",
    account_removed:"Tài khoản này đã bị gỡ khỏi hệ thống, nếu tin rằng điều này là hiểu nhầm, vui lòng liên hệ với bộ phận hỗ trợ viên của chúng tôi",
    account_not_active:"Email này đã được đăng ký, nhưng tài khoản chưa được kích hoat, vui lòng kiểm tra lại email hoặc liên hệ với bộ phận hỗ trợ viên của chúng tôi"
};

export const transSuccess = {
    userCreated: (userEmail) => {
        return `Tài khoản <strong> ${userEmail} </strong> đã được tạo, vui lòng kiểm tra email của bạn để kích hoạt tài khoản, xin cảm ơn!`
    }
}