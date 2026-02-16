export default async function ContactDetails({params}:{params:Promise< {contactId:string }>}){
    const {contactId}=await params;
    return <h1>Hello Member {contactId}</h1>
}