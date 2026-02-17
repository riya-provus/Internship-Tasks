interface CardData{
    name:string;
    age:number;
    isOnline:string;
}
// Props are used to pass data from parent component to child component. It is a read-only data. 
// It cannot be modified by the child component. It is used to display data in the child component. 
// It is used to pass data from one component to another component
export default function Card({name,age,isOnline}:CardData){
    return (
        <div>
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>
            <h1>IsOnline :{isOnline}</h1>
        </div>
    )
}