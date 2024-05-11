import Image from 'next/image'
import React from 'react'

function TestImage() {
  return (
    <Image
    src={`/carousel.jpg`}
    width={500}
    height={500}
    alt="Picture of the author"
  />
  )
}

export default TestImage