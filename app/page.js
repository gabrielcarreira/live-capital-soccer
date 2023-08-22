import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Image
        src="/api/og?text=Gabriel"
        alt="Next.js Logo"
        width={1080 / 3}
        height={1920 / 3}
        priority
      />
    </div>
  )
}
