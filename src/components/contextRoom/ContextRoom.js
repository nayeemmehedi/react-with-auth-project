import React, { createContext, useState } from 'react';

export const CreateConstant = createContext()





const ContextRoom = props => {

    const [values,setValue] = useState([
        {
            title: 'BIKE',
            description: 'No matter how bad your day is Your Bike will always make you feel better',
            imgUrl: 'https://toppng.com/uploads/preview/bike-png-11553947232wabeaw4rfz.png',

            Typename: 'bike',
            avatar: 'B',

        },
        {
            title: 'CAR',
            description: 'Forget the damned motor car and build the cities for lovers and friends.',
            imgUrl: 'https://cdn.luxe.digital/media/2020/12/16175821/most-expensive-cars-2021-Maserati-MC20-luxe-digital%402x.jpg',

            Typename: 'car',
            avatar: 'C',

        },
        {
            title: 'BUS',
            description: ' Its kind of beautiful to sit inside a bus and see a city from the windows.',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lKQpS909Tu99XVbwtHKvy2cvQMX2sbphVwThCp_K2v5gjh5JZpGyMrxkBDJMBBrzBp8&usqp=CAU',

            Typename: 'bus',
            avatar: 'B',

        },
        {
            title: 'TRAIN',
            description: ' Your life is just a train track and you are the train',
            imgUrl: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/02/05/955534-train-railways.jpg',

            Typename: 'train',
            avatar: 'T',

        }
    ])


    return (
        <CreateConstant.Provider value={[values,setValue]}>
            {props.children}
        </CreateConstant.Provider>
    );
};

export default ContextRoom;