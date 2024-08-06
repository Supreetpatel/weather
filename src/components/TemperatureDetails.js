import {FaThermometerEmpty} from "react-icons/fa";
import {BiSolidDropletHalf} from "react-icons/bi";
import {FiWind} from "react-icons/fi";
import {GiSunrise ,GiSunset} from "react-icons/gi";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";

const TemperatureDetails = () => {
    
  const verticalDetails =[
    {
      id:1,
      Icons:FaThermometerEmpty,
      title:"Real Feel",
      value:"22",
    },
    {
      id:2,
      Icons:BiSolidDropletHalf,
      title:"Humidity",
      value:"34%",
    },
    {
      id:3,
      Icons:FiWind,
      title:"Wind",
      value:"11 km/h",
    },
  ];

  const HorizontalDetails =[
    {
      id:1,
      Icons:GiSunrise,
      title:"Sunrise",
      value:"05:33 AM",
    },
    {
      id:2,
      Icons:GiSunset,
      title:"Sunset",
      value:"06:33 PM",
    },
    {
      id:3,
      Icons:MdKeyboardArrowUp,
      title:"High",
      value:"37",
    },
    {
      id:4,
      Icons:MdKeyboardArrowDown,
      title:"Low",
      value:"21",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
      <p>Rain</p>
      </div>
      <div className="flex flex-row items-center justify-between py-3">
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon"
        className="w-20"/>
        <p className="text-5xl">34&deg;</p> 
        <div className="flex flex-col space-y-3 items-start">
          {
            verticalDetails.map(({id,Icons,title,value}) => (
              <div key={id} className="flex font-light text-sm justify-center items-center">
                <Icons size={18} className="mr-1" />
                {`${title}:`} <span className="font-medium ml-1">{value}</span>
          </div>
            ))            
          }
            
        </div>    
      </div>

      <div className="flex flex-row justify-center items-center space-x-10 text-sm py-3">
        {
          HorizontalDetails.map(({id,Icons,title,value}) => (
            <div key={id} className="flex flex-row items-center">
                <Icons size={30} className="mr-1" />
                <p className="font-light ml-1">
                {`${title}:`} <span className="font-medium ml-1">{value}</span> 
                </p>          
              </div>
          ))
        }
      </div>  
    </div>
  )
}

export default TemperatureDetails
