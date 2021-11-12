import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGetData(data));
  }, [url]);
  return [getData, setGetData];
};

export default useGetData;