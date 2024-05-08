import { useState } from "react";
import data from "../data/data"
import style from "./css_para.module.css"
function Para(){
   const[alltask,setAlltask]=useState(0);
   const[task,setTask] =useState([]);  //Stores the generated lorem ipsum text as an array (initially empty)
    
    const addPara=()=>{
        // setAlltask([...alltask,task])
        // data.filter((iteam,index)=>(
        //     iteam.includes(task)
        //   ))

        let amount=parseInt(alltask);
        if(alltask<=0){
            amount=1;
        }
        if(alltask>8){
            amount=8;
        }
        setTask(data.slice(0,amount));
    }

    // function onChange((e)=>)

    // }
    
    return(
        
        <div className={style.main}>
            <h1>tired of boring lorem ipsum?</h1>
            <>
            
            <input type="number" placeholder="enter" name="input" value={alltask} onChange={(e)=>setAlltask(e.target.value)}/>
            <button onClick={addPara}>generat</button>
            </>
            <section className={style.subMain}>
                {

                    task.map((iteam,index)=>(     //It slices the data array (which likely contains pre-written lorem ipsum paragraphs) to get the desired number of paragraphs and sets the text state with the sliced data.
                     <p key={index}>{iteam}</p>
                    ))
                }
            </section>
        </div>
    )
}
export default Para;