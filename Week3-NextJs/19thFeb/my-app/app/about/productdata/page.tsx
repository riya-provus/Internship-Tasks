"use client"
import { useRouter } from 'next/navigation';
export default function productdata() {
  const router=useRouter();
  return (
    <div>
        <div>productdata</div>
        <button onClick={()=>router.push("/about/productdata/1")}>Go to productid pages</button>
    </div>
  )
}
