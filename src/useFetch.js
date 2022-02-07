import React, {useEffect, useState} from 'react';
import axios from 'axios';


function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.post(url, {
      jsonrpc: "2.0",
      id: 83,
      method: "eth_blockNumber",
      params: []
    }).then((response) => {
      setData(parseInt(response.data.result));
      console.log(response.data.result);
    }).catch((err) => {
      setError(err);
    }).finally(() =>{
      setLoading(false);
    });
  }, [url]);

  return {data, loading, error};
}

export default useFetch;