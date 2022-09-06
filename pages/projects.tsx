import { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import MenuBar from "../components/MenuBar";
import Paragraph from "../components/Paragraph";
import Image from "next/image";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Projects </title>
        <meta name="Description" content="Personal and University projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar />

      <ContentContainer className="gap-10">
        <div className="mt-[80px] relative w-[500px] h-[300px] md:h-[350px] md:w-[600px]">
          <Image src="/mountain.png" layout="fill" />
        </div>

        <Paragraph title="Personal & University Projects">
          This is something
        </Paragraph>
      </ContentContainer>
    </div>
  )
}

export default Projects
