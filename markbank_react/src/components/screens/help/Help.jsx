import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import Layout from "../../layout/Layout";
import Cookies from "js-cookie";
import { TOKEN } from "../../../app.constants";

const Help = () => {
  const { setIsAuth } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove(TOKEN);
    // setIsShow(false);
    setIsAuth(false);

    navigate("/auth");
  };

  return (
    <>
      <Layout></Layout>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Help;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5NzEwNDk0NSwiZXhwIjoxNjk3OTY4OTQ1fQ.rA5yWl-NNHKvB0JJUw6qdqdXZfwlL4jmbbuxLVI0o4o

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY5NzEwNTA2MCwiZXhwIjoxNjk3OTY5MDYwfQ.pTjkYCeXuoHJwjZDOSxkGBlM3fUCsfrEb344Y_sDcLY
// mark
