import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-16 h-16 -ml-3">
      <Image
        src="https://i.ibb.co/WWtLjTxv/JPG-4-removebg-preview.png"
        alt="MM Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}

