import Card from "./card";
import lolDB from "../src/data/lolDB";

function Main(){
    return (
        <main className=" container">
            <Card lolDB={lolDB}/>
        </main>
    )
}

export default Main;