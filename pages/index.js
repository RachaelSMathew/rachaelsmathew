import Head from 'next/head'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import About from './AboutComponent'
import Experiences from './ExperiencesComponent'
import Skills from './SkillsComponent'

function Home({ posts }) {
        return (
            <div className="container">
            <Head>
                <title>Rachael M.</title>
                <link rel="icon" href="./favicon.ico" />
            </Head>
                
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
            <Header data={posts}/>
            <About data={posts}/>
            <Experiences data={posts}/>
            <Skills data={posts}/>
            <div className="bottomPadding"></div>
            <Footer/>
            </div>


  
                
        )
}
export async function getStaticProps() {
  const res = await fetch('https://gist.githubusercontent.com/RachaelSMathew/752f206243d72a355e7eef127957b239/raw/bdf5300637ff7ea0b84ff33a1fabd80812a6d940/imageURL.json')
    const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Home;
