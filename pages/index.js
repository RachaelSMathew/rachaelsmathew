import Head from 'next/head'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import About from './AboutComponent'
import Experiences from './ExperiencesComponent'
import Skills from './SkillsComponent'
import axios from "axios"

function Home({ data }) {
        return (
            <div className="container">
            <Head>
                <title>Rachael M.</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
            <Header/>
            <About/>
            <Experiences/>
            <Skills/>
            <div className="bottomPadding"></div>
            <Footer/>
            </div>


  
                
        )
}
export async function getStaticProps() {
   const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/1`
   );
    const { data2 } = await axios.get(
     'https://raw.githubusercontent.com/RachaelSMathew/rachaelsmathew/main/imageURL.json'
    );

   return {
      props: {
        data
     },
  };
}
export default Home;
