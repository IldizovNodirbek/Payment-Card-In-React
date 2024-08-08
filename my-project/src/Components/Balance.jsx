import DataSecond from "./DataSecond";  

const Balance = () => {  
    return (  
        <div className="w-full h-[500px] bg-white overflow-y-scroll" style={{ maxWidth: '600px', maxHeight: '500px' }}>  
            <span className="text-2xl ml-10 font-bold">Current Balance</span>  
            <span className="text-3xl ml-24 font-bold">$720.00</span>  

            {DataSecond.map((data, index) => (  
                <div key={index} className="bg-white rounded shadow-lg border p-4 mt-10 ml-10 ">  
                    <div className="flex items-center justify-between">  
                        <p className="font-bold text-2xl"><span className="text-gray-600">+</span> {data.current}</p> 
                    </div>  
                    <div className="flex items-center justify-between mt-2">  
                        <p className="text-gray-400"><span className="text-gray-600">-</span> {data.information}</p> 
                        <span className="ml-4 text-green-600 font-bold text-[20px]">{data.salary}</span>  
                    </div>  
                </div>  
            ))}  
        </div>  
    )  
}  

export default Balance;