import React, { useContext } from 'react';
import { CreateConstant } from '../contextRoom/ContextRoom';
import Room from '../Room/Room';

const Home = () => {

    const [rooms,setRooms]= useContext(CreateConstant)
    
   
    return (
        // < style={style}>

    <div style={{paddingTop:'40px'}}>

   
        <div class="container row">



            {
                rooms.map(room => <div class="col-12 col-sm-3"> 
                  <Room key={room.Typename} room={room}></Room>  </div>
                  )
            }



        </div>

        </div>

    );
};

export default Home;