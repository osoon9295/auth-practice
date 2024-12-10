import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/api/auth";

export default function SignIn({ setUser }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    const { userId, nickname, avatar } = await login({ id, password });
    alert("로그인되었습니다.");
    setUser({ userId, nickname, avatar });
    navigate("/");
  };

  const navigate = useNavigate();

  return (
    <>
      <label>아이디</label>
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="아이디"
      />
      <label>비밀번호</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="비밀번호"
      />
      <button onClick={handleSignIn}>로그인</button>
      <button
        onClick={() => {
          navigate("/sign_up");
        }}
      >
        회원가입
      </button>
    </>
  );
}
