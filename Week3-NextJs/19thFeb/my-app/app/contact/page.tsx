// "use client"
// import { useRouter } from 'next/navigation' 

export default async function Contact() {
  await new Promise((resolve)=>{
      setTimeout(()=>{
        resolve("Waiting done!");
      },2000);
  })

  // const router=useRouter();
  // const handleclick=()=>{    
  //     router.push("/Navbar");  
  // }

  return (
    <>
    <div>Contact Page</div>
    {/* <button onClick={handleclick}>Click Me !</button>   */}
  </>
  );  
}  