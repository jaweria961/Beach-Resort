
import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../context';
import { withRoomConsumer } from '../context';

import  Loading from './loading';

function RoomContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    if(loading)
             {
                 return <Loading />;
             }
    
            return(
                <div>
               
          
                <RoomsFilter  rooms={rooms}/>
                <RoomsList  rooms={sortedRooms}/>
          
          
            </div>
            );
}


export default withRoomConsumer(RoomContainer);



// export default function RoomsContainer() {

//   return (
// <>
//     <RoomConsumer>

//     {value => {
//        const{loading,sortedRooms,rooms} =value;

//          if(loading)
//          {
//              return <Loading />;
//          }

//         return(
//             <div>
//             Hello from room RoomsContainer
      
//             <RoomsFilter  rooms={rooms}/>
//             <RoomsList  room={sortedRooms}/>
      
      
//         </div>

//         );
//     }}
//     </RoomConsumer>
  
//   </>
//   )
// }
