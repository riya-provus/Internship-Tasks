import React from 'react'
import Link from 'next/link';
export default async function articleid({
  params,
  searchParams
}: {
  params: { articleid: string };
  searchParams: { lang?: "en" | "fr" };
}) {
    const {articleid}=await params;
    const { lang }=await searchParams;
  return (
    <div>
        <div>page {articleid} {lang}</div>
        <Link href={`/articles/${articleid}?lang=en`}>English</Link>
        <Link href={`/articles/${articleid}?lang=fr`}>French</Link>
        <Link href={`/articles/${articleid}?lang=es`}>Spanish</Link>
    </div>
  )
}
