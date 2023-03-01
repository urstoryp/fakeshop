import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function LoginWelcome() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("loginData"));
    if (!data) {
      router.push("/login");
    } else {
      setUserData(data);
    }
  }, []);

  return (
    <div>
      <h1>Welcome!</h1>
      {userData && <p>nickname: {userData.nickname}</p>}
    </div>
  );
}

export default LoginWelcome;
