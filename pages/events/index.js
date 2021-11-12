import React from "react";
import Layout from "../../components/Layout";

export default function EventPage() {
  return (
    <Layout title="Events">
      <h1>My Events</h1>
    </Layout>
  );
}
export async function getStaticProps() {
  const red = await fetch('/api/events')
}