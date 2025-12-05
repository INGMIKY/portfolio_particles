'use client';

import Image from "next/image";
import MotionTransition from "./transitionComponent";

const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src='/avatar-1.png' width={300} height={300} className="w-full h-full" alt="avatar"/>
        </MotionTransition>
    );
}
 
export default Avatar;