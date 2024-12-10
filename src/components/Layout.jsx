import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserInfo } from "../lib/api/auth";

const Layout = ({ setUser, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUserInfo().then((res) => {
      if (res) {
        setUser({ userId: res.id, nickname: res.nickname, avatar: res.avatar });
      } else {
        hadleLogout();
      }
    });
  }, []);

  const hadleLogout = () => {
    setUser(null);
    navigate("/sign_in");
    localStorage.clear();
  };

  console.log("현재 유저", user);

  return (
    <>
      <div>
        {user ? (
          <div>
            <div>{user.nickname}</div>
            <button onClick={hadleLogout}>로그아웃</button>
          </div>
        ) : (
          <div>layout</div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
