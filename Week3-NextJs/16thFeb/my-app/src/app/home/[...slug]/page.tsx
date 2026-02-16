export default async function CatchAllSegments({params}:{params:Promise<{slug:string[]}>}){
    const {slug}=await params;
    if(slug.length===2){
        return <h1>Hello member {slug[0]} with work {slug[1]}</h1>
    }
    else if(slug.length===1){
        return <h1>Hello Member {slug[0]} No work assigned</h1>
    }
    return <h1>Hello Guest</h1>
}