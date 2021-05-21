import React,{useState} from "react";
import "./carusel.css" ;
// import {useState} from "react";



const Carusel=(props)=>{

const [transfer , settransfer] = useState("0%") ;
const [animationName ,setAnimationName] = useState("mymove 10s infinite");
const [background ,setBackground] = useState({backgroundone:"#faef03",backgroundtwo:"#faef03",backgroundtree:"#faef03"});

console.log(background.background1)
    return(
    <div className="CaruselWrapper">
      <div className="caruselSlide">
        <div className="caruselLinn">
          <div className="carusel caruseltransform" style={{marginLeft:transfer,animation:animationName}}>
                   <img src={props.src} />
           </div>
           <div className="carusel ">
                   <img src={props.src1} />
            </div>
            <div className="carusel">
                   <img src={props.src2} />
            </div>
        </div>
        <div className="caruselButton">
                <button  
                style={{background:background.backgroundone}}
                 onClick={()=>{
                     settransfer("0%");
                     setAnimationName("mymove");
                     setBackground({...background,backgroundone:"#fb4d01",backgroundtwo:"#faef03" ,backgroundtree:"#faef03" });
                                        
                             }}>
                </button>
                <button 
                style={{background:background.backgroundtwo}}
                 onClick={()=>{
                    settransfer("-100%");
                    setAnimationName("mymove")
                    setBackground({...background,backgroundone:"#faef03",backgroundtwo:"#fb4d01" ,backgroundtree:"#faef03" });
                              }}>
                </button>
                <button  
                style={{background:background.backgroundtree}}
                 onClick={()=>{
                    settransfer("-200%");
                    setAnimationName("mymove")
                    setBackground({...background,backgroundone:"#faef03",backgroundtwo:"#faef03" ,backgroundtree:"red" });
                            }}>
                </button>
         </div>
      </div>

    </div>
    )

}


export default Carusel;