import { useEffect, useState } from "react";
import axios from "axios";

function useHttp(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(url)
      .then((res) => setData(res.data))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useHttp;
