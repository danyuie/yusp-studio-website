"use client";
import { ButtonProps } from "@/types";
import Image from "next/image";

const ButtonSecondary = ({title, containerStyle, handleClick }: ButtonProps) => {
  return (
    <button
    disabled={false}
    type={`button`}
    className={`button button-secondary ${containerStyle}`}
    onClick={handleClick}>
      <span className=''>
        {title}
      </span>
      <Image 
      src='arrow-right.svg'
      width={20}
      height={20}
      alt=""/>
    </button>
  )
}

export default ButtonSecondary