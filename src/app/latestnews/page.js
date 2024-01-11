import config from "../../config";

const fetchLatestNews = (async) => {
  const reqoptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_KEY}`,
    },
  };
};

const page = () => {
  const latestnews = fetchLatestNews();
  console.log(latestnews);
  return <div>
    hey
  </div>;
};

export default page;
