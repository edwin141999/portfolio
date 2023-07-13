import Image from "next/image";

export default function ImageSize({ className, src, alt, typeFit }) {
  return (
    <div className={`${className}`}>
      <Image src={src} fill quality={100} alt={alt} sizes="100vh" style={{ objectFit: typeFit }} />
    </div>
  )
}