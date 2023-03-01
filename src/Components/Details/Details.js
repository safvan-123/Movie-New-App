import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../App";

function Details() {
  const [url, setUrl] = useContext(MovieContext);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const detailmovie = detail[id];
  console.log(detailmovie);
  console.log(id);
  useEffect(() => {
    axios.get(url).then((res) => setDetail(res.data.results));
  }, [url]);
  return <div>Details</div>;
}

export default Details;
