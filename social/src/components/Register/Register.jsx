import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import crossBtn from "../../_assets/icons/cross.png";
import { AiOutlineExclamation } from "react-icons/ai";
import createToast from "../../utility/toast";
import { userRegister } from "../../redux/auth/authAction";
import { useNavigate } from "react-router-dom";

// date of reg
const day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

// date of reg
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// get fb years
const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);

const Register = ({ setRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // form fields
  const [input, setInput] = useState({
    fname: "",
    sname: "",
    emailOrMobile: "",
    password: "",
    day: "",
    month: "",
    year: "",
    gender: "",
  });

  // valedate state
  const [validate, setValidate] = useState({
    fname: false,
    sname: false,
    emailOrMobile: false,
    password: false,
  });

  // Input state update
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle input validate
  const handleInputValidate = (e) => {
    const fieldName = e.target.name;
    if (!input[fieldName]) {
      setValidate((prevState) => ({
        ...prevState,
        [fieldName]: true,
      }));
    } else {
      setValidate((prevState) => ({
        ...prevState,
        [fieldName]: false,
      }));
    }
  };

  // handle validate on focus
  const handleInputValidateFocus = (e) => {
    const fieldName = e.target.name;
    setValidate((prevState) => ({
      ...prevState,
      [fieldName]: false,
    }));
  };

  //handle register
  const handleRegister = (e) => {
    e.preventDefault();

    // Chake validation
    if (
      !input.fname ||
      !input.sname ||
      !input.emailOrMobile ||
      !input.password ||
      !input.gender
    ) {
      createToast("All fields are required", "success");
    } else {
      dispatch(
        userRegister(
          {
            first_name: input.fname,
            sur_name: input.sname,
            email: input.emailOrMobile,
            password: input.password,
            gender: input.gender,
            birth_date: input.day,
            birth_manth: input.month,
            birth_year: input.year,
          },
          setInput,
          e,
          setRegister,
          navigate
        )
      );
    }
  };

  return (
    <>
      <div className="blur-box">
        <div className="sign-up-card">
          <div className="sign-up-header">
            <div className="sign-up-content">
              <span>Sign Up</span>
              <span>It's quick and easy.</span>
            </div>
            <button onClick={() => setRegister(false)}>
              <img src={crossBtn} alt="" />
            </button>
          </div>
          <div className="sign-up-body">
            <form onSubmit={handleRegister}>
              <div className="reg-form reg-form-inline">
                <input
                  className={validate.fname && "erorr-border"}
                  type="text"
                  value={input.fname}
                  name="fname"
                  onChange={handleInputChange}
                  placeholder="First Name"
                  onBlur={handleInputValidate}
                  onFocus={handleInputValidateFocus}
                />

                {/* <span className="r-icon">
                  <AiOutlineExclamation />
                </span>

                <div className="tol-tip">
                  <div className="tol">
                    <h4>What's your name?</h4>
                  </div>
                  <span></span>
                </div> */}

                <input
                  type="text"
                  value={input.sname}
                  name="sname"
                  onChange={handleInputChange}
                  placeholder="Surname"
                  onBlur={handleInputValidate}
                  className={validate.sname && "erorr-border"}
                  onFocus={handleInputValidateFocus}
                />

                {/* <span className="A-icon">
                  <AiOutlineExclamation />
                </span>
                <div className="tol-tip-2">
                  <div className="tol2">
                    <h4>What's your name?</h4>
                  </div>
                  <span></span>
                </div> */}
              </div>
              <div className="reg-form">
                <input
                  type="text"
                  value={input.emailOrMobile}
                  onChange={handleInputChange}
                  name="emailOrMobile"
                  placeholder="Mobile number or email address"
                  onBlur={handleInputValidate}
                  className={validate.emailOrMobile && "erorr-border"}
                  onFocus={handleInputValidateFocus}
                />

                {/* <span className="B-icon">
                  <AiOutlineExclamation />
                </span>
                <div className="tol-tip-3">
                  <div className="tol3">
                    <h4>
                      You'll use this when you log in if you ever need to reset
                      your password.
                    </h4>
                  </div>
                  <span></span>
                </div> */}
              </div>
              <div className="reg-form">
                <input
                  type="password"
                  value={input.password}
                  onChange={handleInputChange}
                  name="password"
                  placeholder="New password"
                  onBlur={handleInputValidate}
                  className={validate.password && "erorr-border"}
                  onFocus={handleInputValidateFocus}
                />

                {/* <span className="C-icon">
                  <AiOutlineExclamation />
                </span>
                <div className="tol-tip-4">
                  <div className="tol4">
                    <h4>
                      Enter a combination of at least six number, letters and
                      punctuation marks (such as ! and &).
                    </h4>
                  </div>
                  <span></span>
                </div> */}
              </div>
              <div className="reg-form">
                <span>Date of birth</span>
                <div className="reg-form-select">
                  <select name="day" id="" onChange={handleInputChange}>
                    {day.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select name="month" id="" onChange={handleInputChange}>
                    {month.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <select name="year" id="" onChange={handleInputChange}>
                    {years.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="reg-form">
                <span>Gender</span>
                <div className="reg-form-select">
                  <label>
                    Female
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="gender"
                      value="Female"
                    />
                  </label>
                  <label>
                    Male
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="gender"
                      value="Male"
                    />
                  </label>
                  <label>
                    Custom
                    <input
                      onChange={handleInputChange}
                      type="radio"
                      name="gender"
                      value="Custom"
                    />
                  </label>
                </div>
              </div>

              <div className="reg-form">
                <p>
                  People who use our service may have uploaded your contact
                  information to Facebook. <a href="#">Learn more.</a>
                </p>
              </div>
              <div className="reg-form">
                <p>
                  By clicking Sign Up, you agree to our <a href="#">Terms</a>,
                  <a href="#">Privacy Policy</a> and
                  <a href="#">Cookies Policy</a>. You may receive SMS
                  notifications from us and can opt out at any time.
                </p>
              </div>

              <div className="reg-form">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
