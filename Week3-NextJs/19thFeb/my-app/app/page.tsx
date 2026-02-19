import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar/page";
export default function Home() {
  return (
    <div>
      Home page
      {/* <div>
        <Link href="/contact">Go to Contact Page</Link>
      </div>
      <div>
        <Link href="/about">Go to about page</Link>
      </div>
      <div>
        <Link href="/Footer">Go to Footer Page</Link>
      </div>
      <div>
        <Link href="/Navbar">Go to Navbar Page</Link>
      </div> */}
    <div>
      <Link href="./articles/news-1">Article 1</Link>
      <Link href="./articles/news-2">Article 2</Link>
      <Link href="./articles/news-3">Article 3</Link>
    </div>
    </div>
  );
}
