import Image from "next/image";

export default function ImageSize({ className, src, alt, typeFit,classNameImage }) {
  return (
    <div className={`${className}`}>
      <Image src={src} fill quality={100} alt={alt} sizes="100vh" style={{ objectFit: typeFit }} className={classNameImage} />
    </div>
  )
}