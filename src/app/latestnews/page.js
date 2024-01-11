import config from "../../config";

const fetchLatestNews = (async) => {
  const reqoptions = {
    headers: {
      authorization: `Bearer ${process.env.STRAPI_KEY}`,
    },
  };
};

const page = () => {
  const latestnews = fetchLatestNews();
  console.log(latestnews[0]);

  return <div className="flex w-full h-full bg-light" >
    <p></p>
  </div>;
};

export default page;
