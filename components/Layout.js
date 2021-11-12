import Head from "next/head";
import {useRouter} from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";
import ShowCase from "./ShowCase";

export default function layout({ title, keywords, description, children }) {
  const router =useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
     {router.pathname==="/" && <ShowCase/>} 
            <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}
layout.defaultProps = {
  title: "FemiEvents",
  description: "Find the latest musical events and concerts",
  keywords: "music, dance, rock, bands",
};
