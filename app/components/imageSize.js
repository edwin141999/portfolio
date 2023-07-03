import Image from "next/image";

export default function ImageSize({ width, height, className, src, alt }) {
  return (
    <div style={{ position: "relative", width: `${width}`, height: `${height}` }} className={`${className}`}>
      <Image src={src} fill quality={100} alt={alt} sizes="100vh" style={{ objectFit: 'cover' }} />
    </div>
  )
}