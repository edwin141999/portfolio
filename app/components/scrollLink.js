'use client';
import Link from "next/link";

export default function ScrollLink({ href, text }) {

  const handleScroll = (e, mouseEvent) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.substring(href.indexOf('#') + 1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Link href={`${href}`} onClick={handleScroll} className="cursor-pointer">{text}</Link>
  )
}