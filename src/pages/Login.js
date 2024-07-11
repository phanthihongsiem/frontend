import React, { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${loginData.email}\nPassword: ${loginData.password}`);
  };

  return (
    <div className="register-container d-flex justify-content-center align-items-center">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">ĐĂNG NHẬP</h3>
                <form onSubmit={handleSubmit}>
                  <InputField
                    label="Email"
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Mật khẩu"
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                  <div className="mt-3 text-center">
                    <Link to="/forgotpassword">Quên mật khẩu?</Link>
                  </div>
                  <div className="text-center">
                    <Button type="submit" text="Đăng nhập" />
                  </div>
                </form>
              </div>
              <div className="text-center">
                Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
