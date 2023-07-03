import type { NextPage } from 'next'
import Head from 'next/head'
import ContentContainer from '../components/ContentContainer'
import Intro from '../components/Intro'
import Paragraph from '../components/Paragraph'
import LinkButton from '../components/LinkButton'
import InlineSection from '../components/InlineSection'
import getPrefix from '../helpers/getPrefix'

const Home: NextPage = () => {
  const prefix = getPrefix()

  return (
    <div>
      <Head>
        <title>Henry&apos;s website</title>
        <meta name="description" content="Henry's personal website" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
                
      <ContentContainer className="gap-8">
        <Intro imagePath={`${prefix}/myself.jpg`} className="place-items-center pt-[80px]" />

        <Paragraph title="About me"> 
          I am a Computer Science student at UNSW. With a passion in coding and programming.

          <br /><br />

          I had worked as a programming tutor teaching basic C programming to high school students, it was 
          a fun experience! I&apos;ve also completed numerous personal projects in my free time and work
          hard in the university projects.

          <br /><br />

          Apart from coding, I like to cook and play guitar as I&apos;m not a Certified Grass Toucher&trade;.
          And yes, the photo has me wearing a mask cuz I&apos;m a shy person.
        </Paragraph>

        <div className="text-center">
          <LinkButton href='https://www.linkedin.com/in/henry-wan-b20742223/'> LinkedIn &rarr; </LinkButton>
        </div>

        <Paragraph title="Skills & Experience">
          <div>
            Had experiences in both front-end and back-end development. Worked as a programming tutor before.
          </div>

          <InlineSection title='Front End' titleClassName='bg-green-700/80 px-1 rounded-md text-green-200'> 
            ReactJS, NextJS, CSS, TailwindCSS 
          </InlineSection>

          <InlineSection title='Back End' titleClassName='bg-blue-700/80 px-1 mr-[24px] rounded-md text-blue-200'> 
            Python, Java, NodeJS 
          </InlineSection>

          <InlineSection title='Others' titleClassName='bg-purple-800/80 px-1 mr-[36px] rounded-md text-purple-200'>
            C, C#, SQL
          </InlineSection>
        </Paragraph>

        <Paragraph title='What I like'>
          Coding&#x1f5a5;, Guitar&#x1f3b8;, Gaming&#x1f916;, Cooking&#x1f468; 
        </Paragraph>

        <hr className='w-[80vw] border-gray-600/80 lg:w-[800px]' />

        <div className='flex flex-row place-items-center gap-8'>
          <a href='https://www.linkedin.com/in/henry-wan-b20742223/' target="_blank" rel="noreferrer" className='w-[50px] h-[50px]'>
            <div className="w-[40px] h-[40px] invert-[0.2] dark:invert bg-cover" style={{"backgroundImage": `url(${prefix}/linkedinicon.svg)`}} />
          </a>

          <a href='https://github.com/m4ch374' target="_blank" rel="noreferrer" className='w-[50px] h-[50px]'>
            <div className="w-[40px] h-[40px] invert-[0.2] dark:invert bg-cover" style={{"backgroundImage": `url(${prefix}/githubicon.svg)`}} />
          </a>
        </div>
      </ContentContainer>
    </div>
  )
}

export default Home
