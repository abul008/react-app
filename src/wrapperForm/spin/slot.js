import React from "react";
import "./slot.css";
import {useState } from  "react";
import {BsX} from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";

const Spin=()=>{ 

const [axis ,setAxis] = useState({axis1:1,axis2:5,axis3:7,axis4:5,axis5:3,axis6:4,axis7:7,axis8:5,axis9:7,axis10:4,axis11:4,axis12:4,axis13:2,axis14:4,axis15:1,axis16:4,axis17:5,axis18:3,axis19:5,axis20:3,})    
const [item, setItem] = useState(0);
const [item1, setItem1] = useState(0);
const [item2, setItem2] = useState(0);
const [mony ,setMoney] = useState(20000);
const [size , setSize] = useState(10)

    function playBoing(){
        const boing = document.getElementById('boing');
        boing.play()
    }

    function showMessage(){
        const msg = document.getElementById('message');
        msg.style.display = "block" ;
        msg.classList.add('animated' , "pulse")
    }
    function hideMessage() {
        const msg = document.getElementById("message");
        msg.style.display = "none";
    }
      
   
     const axisFun=(min,max)=>{
         return Math.floor(Math.random()*(max - min + 1)) + min
     } 


   function Spin(){
       

       setAxis(
           {...axis,
        axis1:axisFun(Math.floor(Math.random()*2) +1,7),
        axis2:axisFun(Math.floor(Math.random()*2) +1,7),
        axis3:axisFun(Math.floor(Math.random()*2) +1,7),
        axis4:axisFun(Math.floor(Math.random()*2) +1,7),
        axis5:axisFun(Math.floor(Math.random()*2) +1,7),
        axis6:axisFun(Math.floor(Math.random()*2) +1,7),
        axis7:axisFun(Math.floor(Math.random()*2) +1,7),
        axis8:axisFun(Math.floor(Math.random()*2) +1,7),
        axis9:axisFun(Math.floor(Math.random()*2) +1,7),
        axis10:axisFun(Math.floor(Math.random()*2) +1,7),
        axis11:axisFun(Math.floor(Math.random()*2) +1,7),
        axis12:axisFun(Math.floor(Math.random()*2) +1,7),
        axis13:axisFun(Math.floor(Math.random()*2) +1,7),
        axis14:axisFun(Math.floor(Math.random()*2) +1,7),
        axis15:axisFun(Math.floor(Math.random()*2) +1,7),
        axis16:axisFun(Math.floor(Math.random()*2) +1,7),
        axis17:axisFun(Math.floor(Math.random()*2) +1,7),
        axis18:axisFun(Math.floor(Math.random()*2) +1,7),
        axis19:axisFun(Math.floor(Math.random()*2) +1,7),
        axis20:axisFun(Math.floor(Math.random()*2) +1,7),
           })
       if(
           axis.axis1 === axis.axis2 && axis.axis1 === axis.axis3 && axis.axis1 === axis.axis4 && axis.axis1 === axis.axis5 ||
           axis.axis6 === axis.axis7 && axis.axis6 === axis.axis8 && axis.axis6 === axis.axis9 && axis.axis6 === axis.axis10 ||
           axis.axis11 === axis.axis12 && axis.axis11 === axis.axis13 && axis.axis11 === axis.axis14 && axis.axis11 === axis.axis15 || 
           axis.axis16 === axis.axis17 && axis.axis16 === axis.axis18 && axis.axis16 === axis.axis19 && axis.axis16 === axis.axis20

           ){
               
               setMoney(mony + size * 25)
           
           playBoing();
           showMessage();
       }else if( 
           axis.axis1 === axis.axis2 && axis.axis1 === axis.axis3 || axis.axis3 === axis.axis4 && axis.axis3 === axis.axis5 || 
           axis.axis6 === axis.axis7 && axis.axis6 === axis.axis8 || axis.axis8 === axis.axis9 && axis.axis8 === axis.axis10 ||
           axis.axis11 === axis.axis12 && axis.axis11 === axis.axis13 || axis.axis13=== axis.axis14 && axis.axis13 === axis.axis15 
        ){
           setMoney(mony + size * 6)
       }
       
       
       else{
           hideMessage();
             setMoney(mony - size)
       }

       
   }
   return(<div className="wrapperGames">
            <div className="slotGames">
                <div className="slotCantrol">
                 <div className="slottitleAndCloss">
                 <span>Slot Games</span>
                 <BsX/>
                   
                 </div>   
                  <div className="slotForma">
                    <table>
                         <tbody>
                          <tr>
                             <td><img src={`/axis/axis${axis.axis1}.png`}/></td> 
                             <td><img src={`/axis/axis${axis.axis2}.png`}/></td>
                             <td><img src={`/axis/axis${axis.axis3}.png`}/></td>     
                             <td><img src={`/axis/axis${axis.axis4}.png`}/></td> 
                             <td><img src={`/axis/axis${axis.axis5}.png`}/></td>
                         </tr> 
                         <tr>
                             <td><img src={`/axis/axis${axis.axis6}.png`}/></td>   
                             <td><img src={`/axis/axis${axis.axis7}.png`}/></td> 
                             <td><img src={`/axis/axis${axis.axis8}.png`}/></td>
                             <td><img src={`/axis/axis${axis.axis9}.png`}/></td>
                             <td><img src={`/axis/axis${axis.axis10}.png`}/></td>         
                         </tr>
                         <tr>
                             <td><img src={`/axis/axis${axis.axis11}.png`}/></td>
                             <td><img src={`/axis/axis${axis.axis12}.png`}/></td> 
                             <td><img src={`/axis/axis${axis.axis13}.png`}/></td> 
                             <td><img src={`/axis/axis${axis.axis14}.png`}/></td>
                             <td><img src={`/axis/axis${axis.axis15}.png`}/></td>     
                         </tr> 
                         <tr>
                             <td><img src={`/axis/axis${axis.axis16}.png`}/></td> 
                             <td><img src={`/axis/axis${axis.axis17}.png`}/></td>
                             <td><img src={`/axis/axis${axis.axis18}.png`}/></td> 
                             <td><img src={`/axis/axis${axis.axis19}.png`}/></td> 
                             <td><img src={`/axis/axis${axis.axis20}.png`}/></td> 
                         </tr>
                         <tr>

                         </tr>
                        </tbody>
                    </table>
                    <div className=""></div>
                </div>
                <div className="slotStavkaSize">
                    <div className="slotManu">
                        <span>Manu</span>
                    </div>
                 
                    <div className="stavkaSize">
                       <select  onClick={(e)=>{setSize(parseInt(e.target.value))}}>
                           <option>10</option>
                           <option>50</option>
                           <option>100</option>
                           <option>150</option>
                       </select>
                    </div>
                    <div className="mony">{mony}AMD</div>
                    <div className="SlotCenter">
                    <button onClick={Spin}><FiRefreshCw/></button>
                
                    </div>
                </div>
            </div>    
            </div>  
       <div className="slotWrapper">
           <div id="message">
               You know
           </div>
           <audio id="boing">
           <source src="horse.mp3" type="audio/mpeg"></source>
           
           </audio>
       </div>
    </div>
   )

}

export default Spin;