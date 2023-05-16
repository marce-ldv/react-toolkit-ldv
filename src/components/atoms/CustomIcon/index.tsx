export interface CustomIconProps {
  src: string
  alt: string
  style?: {}
}

const CustomIcon = ({ src, alt, style, ...props }: CustomIconProps) => {
  return <img src={src} alt={alt} style={style} {...props} />
}

export default CustomIcon
