import Header from '../components/Header';
import Carousel from '../components/Carousel'
import './css/home.css' 

const Home = () => {
    return (
        <>
          <Header/>

          <div className='w-[100%] h-auto background-home-col pb-10'>
               <Carousel/>
          </div>
        </>
    );
}

export default Home;
