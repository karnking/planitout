import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {text:"Home",href:"/"},
    {text:"Docs",href:"/docs"},
    {text:"Scratch Pad",href:"/scratch"},
    {text:"Blogs",href:"/blogs"},
  ]
  return (
    <nav className="bg-[#fafafa] justify-between p-2 flex flex-row bg-blend-multiply items-center">
        <Image src={'/static/logo2.jpg'} className="rounded-xl" alt='Plan it out' width={180} height={100}/>
        <div className="flex justify-around gap-5">
          {links.map(link=><Link key={link.text+link.href} className="hover:bg-slate-200 rounded p-2" href={link.href}>{link.text} ⮟</Link>)}
        </div>
        <Link href='/login'><h2 className="text-md font-bold py-1.5 px-3 bg-slate-600 text-white rounded-xl">Log in</h2></Link>
    </nav>
  )
}