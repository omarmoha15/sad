
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Employees from '../Employees'; // Update the path
import Logo from '../../iamge/sheet1/logo.png'
import './Login.css'


function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  
    // Access form elements using e.target
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    // Rest of your code remains the same
    const user = Employees.find(
      (employee) => employee.email === email && employee.password === password
    );
  
    if (user) {
      // Navigate to the desired route upon successful login
      navigate('/dashbord');
    } else {
      // Handle incorrect credentials
      alert('Invalid email or password');
    }
  };
  

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   // Implement your registration logic here
  //   const name = e.target.elements.name.value;
  //   const email = e.target.elements.email.value;
  //   const password = e.target.elements.password.value;

  //   // Check if the email is already registered
  //   const existingUser = Employees.find((employee) => employee.email === email);

  //   if (existingUser) {
  //     // Handle existing email
  //     alert('Email already registered');
  //   } else {
  //     // Create a new user and add to the Employees array
  //     const newUser = {
  //       id: (Employees.length + 1).toString(),
  //       user_name: name,
  //       email: email,
  //       phone: '0123456789', // You may need to add phone input in your form
  //       password: password,
  //     };

  //     Employees.push(newUser);

  //     // Navigate to the desired route upon successful registration
  //     navigate('/dashboard');
  //   }
  // };

  return (
    <div className="container">
       <div className="header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
          
          <img src={Logo} alt='' className='logo' />
        </div>
      {/* <div className="form-container sign-up">
        <form onSubmit={handleSignUp}>
          <h1>انشاء حساب</h1>
          <span>قم بأدخال الاسم والبريد الالكتروني وكلمة المرور</span>
          <input type="text" name="name" placeholder="الاسم" />
          <input type="email" name="email" placeholder="البريد الالكتروني" />
          <input type="password" name="password" placeholder="كلمة المرور" />
          <button type="submit">تأكيد </button>
        </form>
      </div> */}
      <div className="form-container sign-up">
        <form onSubmit={handleSignIn}>
          <h1>تسجيل الدخول </h1>
          <span>ادخل البريد الالكتروني وكملة المرور    </span>
          <input type="email" name="email" placeholder="البريد الإلكتروني" />
          <input type="password" name="password" placeholder="كلمة المرور" />

          <button type="submit">الدخول </button>
        </form>
      </div>
      {/* <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1> قم بأنشاء حسابك الان</h1>
            <p>لديك حساب بالفعل انتقل الى الصفحه التالية</p>
            <button className="hidden" onClick={toggleForm}>
              تسجيل الدخول
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>مرحبا بك</h1>
            <p>ليس لديك حساب ؟</p>
            <button className="hidden" onClick={toggleForm}>
              انشاء حسابك الان
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Login;