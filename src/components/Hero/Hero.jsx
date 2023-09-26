import Cover from '../../assets/cover.jpg';
import Two from '../../assets/two.png';
import Three from '../../assets/three.png';
const Hero=()=>{
    return(
        <>
           <div className="flex h-80 bg-gradient-to-r from-purple-500 via-white to-white flex items-center justify-center">
             <div className="w-1/2 ">
                <h1 className="text-center text-2xl text-red-600">Are you hungry?</h1>
                <h1 className='text-right text-5xl text-orange-700'>Dont Wait!</h1>
                <p className='text-right  text-teal-900'>Let's Start to order food now</p>
                <p className='m-3 text-grey-400'>Food, drinks, groceries and more available for delivery at your doorsteps!</p>
            </div>

            <div className="w-1/2 flex flex-row ">
                <img src={Two} alt=""  width="50%"/>
                <img src={Three} alt=""  width="50%"/>
            </div>
           </div>
           <div>
            <img src={Cover} alt="" />
           </div>
        </>
    )
}
export default Hero;