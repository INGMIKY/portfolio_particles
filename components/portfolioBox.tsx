import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id:number,
        title:string,
        image:string,
        urlGithub:string,
        urlDemo:string,
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {

    return (
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">
                {props.data.title}
            </h3>
            <Image src={props.data.image} alt="image product" width={200} height={200} className="w-full md:w-[200px] rounded-2xl h-auto "/>

            <div className="flex gap-5 mt-5">
                <Link href={props.data.urlGithub} target="_blanck" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 ">
                    Github
                </Link>
                <Link href={props.data.urlDemo} target="_blanck" className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 ">
                    Demo
                </Link>
            </div>
        </div>
    );
}
 
export default PortfolioBox;