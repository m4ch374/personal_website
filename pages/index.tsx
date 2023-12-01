import type { NextPage } from 'next'
import Head from 'next/head'
import ContentContainer from '../components/ContentContainer'
import Intro from '../components/Intro'
import Paragraph from '../components/Paragraph'
import LinkButton from '../components/LinkButton'
import InlineSection from '../components/InlineSection'
import getPrefix from '../helpers/getPrefix'
import Experience from '../components/Experience'

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

          I had tapped into different areas and stumbled upon frontend development which is what I&apos;m currently focusing.
          Utilizing ReactJS and work on interesting projects to bring excellent UI/UX experience.

          <br /><br />

          I have worked at stomble, where I wrote a custom in-house fetching solution which utilizes the fluent interface design pattern.
          And also developed a feature-rich reels-like short form video system using React Native. Currently, I am appointed as a frontend
          director leading the development of an internal hiring and offers system for the CSESoc.

          <br /><br />

          Apart from coding, I like to cook and play guitar as I&apos;m not a Certified Grass Toucher&trade;.
          And yes, the photo has me wearing a mask cuz I&apos;m a shy person.
        </Paragraph>

        <div className="text-center">
          <LinkButton href='https://www.linkedin.com/in/henry-wan-b20742223/'> LinkedIn &rarr; </LinkButton>
        </div>

        <Paragraph title="Skills & Experience">
          <Experience company='Stomble' jobTitle='Full-Stack Developer' start='Jul 2023' end='present' location='Sydney, AU'>
            <ul className='list-disc pl-4'>
              <li>Developed a large-scale, responsive, and user-friendly mobile application using TypeScript, React Native, Expo, Serverless and Prisma.</li>
              <li>Contributed to standardizing fetching behavior by developing a sophisticated in-house fetcher class by adopting the fluent interface design pattern.</li>
              <li>Standardized the React Redux storing layout and provided an easily accessible and maintainable dispatcher for other team members to use in their work.</li>
              <li>Developed a custom eslint rule to further standardize the quality of code across the whole project.</li>
              <li>Crafted, developed, and maintained an intuitive and feature packed reels-like short form video system, using TailwindCSS and Amazon S3 for reliable and optimized multimedia content delivery.</li>
              <li>Participated in Agile and SCRUM planning process, assisting the product owner in documenting roadmap and planning future sprints, using JIRA and Confluence.</li>
            </ul>
          </Experience>

          <Experience company='UNSW CSESoc' jobTitle='Frontend Director' start='Jul 2023' end='Nov 2023' location='Sydney, AU'>
            <ul className='list-disc pl-4'>
              <li>Spearheaded the frontend development of an internal hiring and offers system for the CSESoc. Leading, managing, and coordinating team members to ensure adherence to established timelines</li>
              <li>Developed and maintained a highly responsive and interactive UI for the hiring system, utilizing TypeScript, React JS, TailwindCSS, MUI and Vite.</li>
              <li>Overhauled the design for an application subsystem, improving the user experience and optimizing performance for lower quality hardware, leveraging the TDD methodology to ensure code correctness.</li>
              <li>Participated in the construction of the CI/CD pipelines to ensure the team pushing well-tested and bug free code.</li>
              <li>Carry out managerial responsibilities utilizing Confluence and JIRA.</li>
            </ul>
          </Experience>

          <Experience company='SAS Analytics' jobTitle='Project Team Member' start='May 2023' end='Jul 2023' location='Sydney, AU'>
            <ul className='list-disc pl-4'>
              <li>Developed a full stack webapp for financial risk managers to utilize a home loan origination model for risk assessment.</li>
              <li>Leveraging SAS software suites, developed models which aimed at accurately identifying customers with a high propensity for default</li>
            </ul>
          </Experience>

          <Experience company='UNSW CSESoc' jobTitle='Training Program Lead' start='Feb 2023' end='Jul 2023' location='Sydney, AU'>
            <ul className='list-disc pl-4'>
              <li>Taking the when2meet application as inspiration, led a team of 5 in developing a website with similar features, while having unparalleled user experience in mind.</li>
              <li>Assist and teach inexperienced trainees to get familiar with common frontend development technologies such as TypeScript, React JS, NodeJS and TailwindCSS</li>
            </ul>
          </Experience>

          <Experience company='Enjoyneer' jobTitle='Programming Tutor' start='Nov 2021' end='March 2022' location='Hong Kong'>
            <ul className='list-disc pl-4'>
              <li>Teach and educate high school students on basic C programming.</li>
              <li>Assist in constructing the syllabus, authored various documents as teaching materials for students to learn</li>
              <li>Contributed to the design of assignments, marking, and providing feedback to students.</li>
            </ul>
          </Experience>

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
