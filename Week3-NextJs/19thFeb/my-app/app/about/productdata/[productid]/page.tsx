import React from 'react'

export default async function productid({params}:{params:{productid:number}}) {
    const {productid}=await params;
  return (
    <div>
        <div>product id is {productid}</div>
        <div>Featured products </div>
    </div>
  )
}
