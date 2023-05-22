import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisementCard from './AdvertisementCard';
import { useNavigation } from 'react-router-dom';
import Spinner from '../utils/Spinner';

const Advertisement = () => {
    const navigation = useNavigation()



    //!React Quary- tanstack.
    const { data: advertise = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data
        }
    })




    if (navigation.state === 'loading') {
        return <Spinner></Spinner>
    }
    return (
        <div>  
            <div className='my-5 shadow-lg bg-blue-200 rounded-md'>
                <marquee className='text-2xl text-black p-4 ' > A huge Discount is going for all of this products. don't be late..!! grave the Opportunity..!!</marquee>
            </div>
            
            
            
            <h1 className='text-4xl text-center text-secondary font-bold my-5'>Advertisement</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 my-10'>
                {
                    advertise.map((add) => <AdvertisementCard
                        key={add._id}
                        add={add}></AdvertisementCard>)
                }
            </div>
            
        </div>
    );
};

export default Advertisement;