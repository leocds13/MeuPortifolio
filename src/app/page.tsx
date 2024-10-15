import Link from "next/link";

export default function Home() {

  const onClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <h1>Home</h1>
      <Link href="/about" onClick={onClick}>About</Link>
    </div>
  );
}
