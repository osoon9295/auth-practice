import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../lib/api/auth";

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log(id);
    console.log(password);

    const response = await register({ id, password, nickname });
    if (response) {
      confirm("회원가입이 완료되었습니다.");
      navigate("/sign_in");
    }
  };
  return (
    <>
      <h1>회원가입</h1>
      <label htmlFor="id">아이디</label>
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
        placeholder="아이디"
      />
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
      />
      <label htmlFor="nickname">닉네임</label>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="닉네임"
      />
      <button onClick={handleRegister}>회원가입</button>
      <button
        onClick={() => {
          navigate("/sign_in");
        }}
      >
        돌아가기
      </button>
    </>
  );
}
