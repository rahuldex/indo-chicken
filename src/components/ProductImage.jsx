import { useState } from 'react'
import { getProductImage, fallbackImage } from '../utils/productImages'

export default function ProductImage({ product, alt, className = '', ...props }) {
  const [src, setSrc] = useState(getProductImage(product))

  return (
    <img
      src={src}
      alt={alt || product?.name || 'Product'}
      className={className}
      onError={() => setSrc(fallbackImage)}
      {...props}
    />
  )
}
