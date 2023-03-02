import React from 'react'
import { CldImage } from 'next-cloudinary';

export const Img = () => {
  return (
    <CldImage src="https://cloudinary-res.cloudinary.com/image/upload/Image_Analysis_Result.png" alt="img" />
  )
}
