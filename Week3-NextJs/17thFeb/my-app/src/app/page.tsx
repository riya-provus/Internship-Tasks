import ArrayUseState from "./components/Array";
import Card from "./components/Card";
import Counter from "./components/Counter";
import FetchData from "./components/FetchData";
import NameUseState from "./components/NameUseState";
import ObjectUseState from "./components/ObjectUseState";
import UseRefData from "./components/UseRefData";

import { NameProvider } from "./components/context/NameContext";
import ShowName from "./components/ShowName";
export default function Home (){
  return (
   <div>
      <h1>hello world</h1>
      {/* <Card name="Riya" age={21} isOnline="fndvkd"/>  
      <Counter/>
      <NameUseState/>
      <ObjectUseState/>
      <ArrayUseState/>
      <FetchData/>
      <UseRefData/> */}

      <NameProvider>
        <ShowName/>
      </NameProvider>
   </div>
  );
}
