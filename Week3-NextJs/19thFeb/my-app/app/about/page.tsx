"use client"

import { useRouter } from 'next/navigation';
export default function about() {
    const router=useRouter();
    return (
        <div>
            <div>About page</div>
            <button onClick={()=>router.push("/about/productdata")}>Go to productdata</button>
        </div>
    )
}
