import NavigationBar from '../../../../WebstormProjects/untitled/src/components/NavigationBar';
import Footer from '../../../../WebstormProjects/untitled/src/components/Footer'
import Content from '../../../../WebstormProjects/untitled/src/components/Content'
import './css/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <NavigationBar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default Home;