import Image from "next/image";
import Page from "./home/Page";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  return (
    <>
      <Page activeTab={params.tab || "tab1"} />
    </>
  );
}
