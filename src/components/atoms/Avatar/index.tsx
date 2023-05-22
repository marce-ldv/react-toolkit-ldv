import * as AvatarRadix from '@radix-ui/react-avatar'

interface AvatarProps {
  src: string
}

const Avatar = ({ src }: AvatarProps) => (
  <AvatarRadix.Root className='bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle'>
    <AvatarRadix.Image
      className='h-full w-full rounded-[inherit] object-cover'
      src={src}
      alt='Colm Tuite'
    />
    <AvatarRadix.Fallback
      className='text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium'
      delayMs={600}
    >
      CT
    </AvatarRadix.Fallback>
  </AvatarRadix.Root>
)

export default Avatar
