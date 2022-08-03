import React, { useState } from "react";
import Test from "./Test";


const Routines = ({token}) =>{
    const [test, setTest] = useState(false)
    return(
        <>
        {token && !test ? 
        <button onClick={()=> setTest(true)}>Test me!</button> : <></>}

        {test ? <><Test/> <button onClick={()=>setTest(false)}>Cancel</button></> : <p>This isn't working</p>}
        <div>
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb
        jlkaklsjdlajsld;jaslkdjal'sjdkl;hasdljkfhbbsljkdhgbfljhsdbfljhbsdflhbsdljfbsdljfbsdfsdjklbfhjhb

        </div>
        </>
    )
}




export default Routines