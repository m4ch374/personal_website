import { NextPage } from "next";
import Head from "next/head";
import MenuBar from "../components/MenuBar";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Projects </title>
        <meta name="Description" content="Personal and University projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar />

      <div className="pt-[100px]">
        <span className="text-7xl"> Hello world </span>
      </div>
    </div>
  )
}

export default Projects
