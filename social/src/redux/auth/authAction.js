import axios from "axios";
import createToast from "../../utility/toast";

// user register
export const userRegister = (data, setInput, e, setRegister, navigate ) => async (dispatch) => {
  try {
    await axios
      .post("/api/v1/user/register", data)
      .then((res) => {
        createToast(res.data.message, "success");
        setInput({
          fname: "",
          sname: "",
          emailOrMobile: "",
          password: "",
          day: "",
          month: "",
          year: "",
          gender: "",
        });
        e.target.reset();
        setRegister(false);
        navigate("/activation");
      })
      .catch((error) => {
        createToast(error.response.data.message);
      });
  } catch (error) {
    createToast(error.response.data.message);
  }
};
