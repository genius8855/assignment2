import Image from "next/image";
import Product from "./product";
import Product2 from "./product2";

export default function Content() {
    return (
        <div className="w-[970px] h-[1702px] gap-5 right ml-auto mr-[70px] mt-[100px] my-auto">

            <div className="w-[970px] h-[554px] gap-5 flex m-0">
                <Product/>
                <Product/>
                <Product/>
            </div>


            <div className="w-[970px] h-[554px] gap-5 flex m-0 my-5">
                <Product2/>
                <Product2/>
                <Product2/>
            </div>


            <div className="w-[970px] h-[554px] gap-5 flex m-0 my-5">
                <Product/>
                <Product/>
                <Product/>
            </div>

        </div>
    );
}