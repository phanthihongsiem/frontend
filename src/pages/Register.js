import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Login from "./Login";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    otp: "",
    codeCompany: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [otpSubmitted, setOtpSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.repassword) {
      setFormSubmitted(true);
    } else {
      alert("Mật khẩu không khớp. Vui lòng nhập lại!");
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (formData.otp === "123456") {
      setOtpSubmitted(true);
    } else {
      alert("OTP không hợp lệ");
    }
  };

  if (otpSubmitted) {
    return <Login />;
  }

  return (
    <div className="register-container d-flex justify-content-center align-items-center">
      <div className="container  ">
        <div className="row justify-content-center">
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">ĐĂNG KÝ</h3>
                {!formSubmitted && (
                  <form onSubmit={handleSubmit}>
                    <InputField
                      label="Tên"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Mã công ty"
                      type="text"
                      name="codeCompany"
                      value={formData.codeCompany}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Mật khẩu"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      label="Nhập lại mật khẩu"
                      type="password"
                      name="repassword"
                      value={formData.repassword}
                      onChange={handleChange}
                      required
                    />
                    <div className="text-center">
                      <Button type="submit" text="Tiếp tục" />
                    </div>
                  </form>
                )}
                {formSubmitted && (
                  <form onSubmit={handleOtpSubmit}>
                    <InputField
                      type="text"
                      label="OTP"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      required
                    />
                    <div className="text-center">
                      <Button type="submit" text="Xác nhận OTP" />
                    </div>
                  </form>
                )}
              </div>
              <div className="mt-3 text-center">
                Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
