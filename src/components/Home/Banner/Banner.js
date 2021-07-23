import React, { useState } from 'react';
import './Banner.css'
import { GoLocation, GoPrimitiveDot } from "react-icons/go";
import { useForm } from "react-hook-form";
import Direction from '../Map/Direction';
const Banner = () => {

    const [data,setData] = useState(null)
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        
        console.log(data);
        setData(data)
    }


    return (
        <div className="banner">
            <div style={{display: data ? 'none': 'block'}} className=" container">
            <div   className="row"  >
                <div className="col-md-6 mt-5 pt-5">
                    <h3>Text Heading</h3>
                        <p>Lorem ipsum dolor sit amet,<br/>
                        consectetur dipiscing elit, sed <br/>
                        o eiusmod tempor.</p>
                       <div className="background">
                       <img className="img-fluid" src="https://i.ibb.co/4sQkjf0/Feature-Graphic.png" alt="" />
                       <div className="border"></div>
                       </div>
                </div>
                <div className="col-md-6">
                    <div className="sendingSite">
                        <h4>What are you sending?</h4>
                        <div className="imagesAll d-flex justify-content-around pt-4">
                           <div className="">
                           <div className="documentImg">
                                <img className="img-fluid" src="https://i.ibb.co/PQ5kdS2/Group-698.png" alt="" />
                            </div>
                            <small>Documents</small>
                           </div>
                         
                            <div className="parcelText">
                            <div className="boxImg">
                                <img className="img-fluid" src="https://i.ibb.co/02hT441/Boxes.png" alt="" />
                                
                            </div>
                            <small>Parcel</small>
                            </div>
                            <div className="heavyLoadText">
                            <div className="busImg">
                                <img className="img-fluid" src="https://i.ibb.co/K0kkytt/Group-700.png" alt="" />      
                            </div>
                            <small>Heavy Load</small>
                            </div>
                        </div>
                        <div className="inputField">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                        <div className="input-group mx-auto pt-5">
                         <GoPrimitiveDot className="mt-4" size="20px"/>   
                     <input 
                     type="text"
                     name="pickup"
                     {...register("pickup", { required: true })}
                      className="form-control"
                       placeholder="Enter Pickup Location"/>
                    
                    </div>
                    <div className="input-group mx-auto">
                    <GoLocation className="mt-4" size="20px"/>
                     <input type="text" 
                     name="recipient"
                     {...register("recipient", { required: true })}
                     className="form-control" placeholder="Enter Recipient Location"/>
                     
                    </div>
                   <div className=" d-flex justify-content-center">
                   <button type="submit" className="orderBtn">Order</button>
                   </div>
                        </form>



                        </div>
                   
                    </div>
                    <div className="trackPackage ">
                        <h4>Track your Package</h4>
                        <div className="input-group mx-auto">
                     <input type="text" className="form-control" placeholder="Enter Track ID/Code"/>

                    </div>
                    </div>
                </div>
            </div>
    
            </div>

            <div style={{display: data ? 'block': 'none'}} className="container ">

        <Direction data={data}/>
            </div>


        </div>
    );
};

export default Banner;