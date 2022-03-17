import Image from 'next/image'

const Background = () => (
  <div className="h-screen">
    <div className="absolute -z-10">
      <Image
        alt="Background Image"
        src="/background1.png"
        layout="fill"
        objectFit="cover"
        quality={100} />
        </div>
    </div>
)

export default Background