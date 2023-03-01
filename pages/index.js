import Link from "next/link";

function Home() {
  const handleLogout = async () => {
    try {
      const accessToken = JSON.parse(
        localStorage.getItem("loginData")
      ).accessToken;
      const response = await fetch("http://localhost:8080/members/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          refreshToken: localStorage.getItem("loginData").refreshToken,
        }),
      });
      if (response.ok) {
        localStorage.removeItem("loginData");
      } else {
        console.error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href="/about">
        <div>About</div>
      </Link>
      <br></br>
      <Link href="/login">
        <div>Login</div>
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
