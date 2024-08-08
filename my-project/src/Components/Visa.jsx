import React from 'react';  
import Data from './Data';  
import VisaCard from './CardIcons/VisaCard';
import MasterCard from './CardIcons/MasterCard';
import MaestroCard from './CardIcons/MaestroCard';

const Visa = () => {  
    return (  
        <div className="w-full h-[500px] bg-gray-200 overflow-y-scroll" style={{ maxWidth: '400px', maxHeight: '500px', }}>  
        <span className='text-blue-800 font-bold text-3xl ml-10'>My Wallets</span>
        <span className='font-bold text-4xl ml-32'>+</span>
            {Data.map((item, index) => (  
                <div key={index} className="bg-white rounded shadow-lg border p-4 mt-10 ml-10 transition-all hover:border-4 hover:border-blue-500 text-gray-400 text-2xl" style={{ width: '300px', height: '200px' }}>  
                   
                    {item.cardType === 'VISA' && (  <VisaCard/> )}  
                    {item.cardType === 'MasterCard' && ( <MasterCard/> )}  
                    {item.cardType === 'Maestro' && ( <MaestroCard/> )}

                    <p>{item.number}</p>  
                    <p>{item.validThru}</p>  
                </div>  
            ))}  
        </div>  
    );  
};  

export default Visa;