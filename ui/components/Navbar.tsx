import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
        <Image src={'/static/logo.jpg'} alt='Plan it out' width={100} height={50}/>
    </nav>
  )
}