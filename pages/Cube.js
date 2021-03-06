import * as THREE from "three";
import Cube from 'react-3d-cube';
import React from 'react'
import { useEffect, useRef } from "react";
import Nuance from "../images/Nuance-icon.png";
import UMass from "../images/UMass-icon.png";
import CYE from "../images/CYE-icon.png";
import FP from "../images/FP-icon.png";
import Neb from "../images/Neb-icon.png";
import Neb2 from "../images/Neb2-icon.png";
import Image from 'next/image'

const Cube3d = () => {
        return (
                <React.Fragment>
                <div>
                       <center>
                           <div
                           style={{
                               width: 350,
                               height: 350,
                               cursor: 'grab'
                            }}
                           >
                           <Cube size={350} index="back">
                <div>
                <Image width={350} height={350} src={Neb2}/>
                </div>
                
                <div>
                <Image width={350} height={350} src={FP}/>
                </div>
                <div>
                <Image width={350} height={350} src={Neb}/>
                </div>
                <div>
                <Image width={350} height={350} src={CYE}/>
                </div>
                <div>
                    <Image src={UMass}/>
                </div>
                <div>
                    <Image src={Nuance}/>
                </div>

                           </Cube>
                           </div>
                       </center>
                     </div>
                </React.Fragment>
             
                
        )
}

export default Cube3d;


