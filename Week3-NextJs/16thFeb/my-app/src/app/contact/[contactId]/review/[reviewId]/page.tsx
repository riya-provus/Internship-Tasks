export default async function ReviewData({params}:{params:Promise<{contactId:string,reviewId:string}>}){
    const {contactId,reviewId}=await params;
    return <h1>Hello Member {contactId} with review {reviewId}</h1>
}