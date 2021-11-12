import Layout from "../components/Layout";
import { API_URL } from "../config";

export default function HomePage(props) {
  console.log(props.events)
  return (
    <div>
      <Layout>
        <h1>Music Events</h1>
        {props.events.map((event)=> {return <h3>{event.name}</h3>})}
      </Layout>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events =await res.json();
  return {
    props: { events },
  };  
}
