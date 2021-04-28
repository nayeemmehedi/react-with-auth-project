
import React, {useContext,  useState } from 'react';
import { useParams } from 'react-router';
import { CreateConstant } from '../contextRoom/ContextRoom';


// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

// import MapboxWorker from '/mapbox-gl/dist/mapbox-gl-csp-worker';


// mapboxgl.workerClass = MapboxWorker;
// mapboxgl.accessToken = 'pk.eyJ1IjoibmF5ZWVtLW1laGVkaTQxIiwiYSI6ImNrbmxrdTIzczBpdGIyb21rZ2hjajE5NXoifQ.RFAlxG8Pqy3AUeoOZ9kzdQ';



const Book = () => {


    const [rooms, setRooms] = useContext(CreateConstant)

    const [toggle ,setToggle] = useState(false)
  

    let { Typename } = useParams()

    let b = rooms.filter(room => room.Typename === Typename)

    const handleToggle =(e)=>{
        e.preventDefault()


        setToggle(true)


    }

    const mystyle = {
        color: "gray",
        align:"center",
        borderTop:"20px",
        
        fontSize:"25px"
      };

    return (
        <div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-2">


                        <form onSubmit={handleToggle}>


                            <div class="form-group">
                                <label for="exampleInputEmail1">FROM</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="from" required />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">TO</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="to" required />

                            </div>
                            <input type="submit" value="submit"/> <br/>
                            <small>click this,there  is a magic.</small>
                        


                        </form>



                        {
                          toggle &&  b.map(element =>

                                <>
                                <br/> <br/>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-8">
                                    
                                             <img width="80px" src={element.imgUrl} alt=""/>

                                        </div>
                                            <div class="col-sm-4"><h5>21 {element.title} waiting </h5></div>
                                        </div>

                                    </div>
                                    <br/> 
                                     <div class="container">
                                     <div class="row">
                                         <div class="col-sm-8">
                                     
                                              <img width="80px" src={element.imgUrl} alt=""/>
 
                                         </div>
                                             <div class="col-sm-4"><h5>35 {element.title} waiting</h5></div>
                                         </div>
 
                                     </div>
                                     <br/> 
                                     <div class="container">
                                    <div class="row">
                                        <div class="col-sm-8">
                                    
                                             <img width="80px" src={element.imgUrl} alt=""/>

                                        </div>
                                            <div class="col-sm-4"><h5>55 {element.title} waiting</h5></div>
                                        </div>

                                    </div>
                                     </>

                            )

                        }

                    </div>

                    <div class="col-sm-8">

                        <div>

                            <p style={mystyle} >
                            I tried so hard and got so far
                        But in the end it doesn't even matter
                        I had to fall to lose it all
                        But in the end it doesn't even matter

                            </p>

                       

                        </div>



                    </div>
                </div>

            </div>





        </div>
    );
};

export default Book;



