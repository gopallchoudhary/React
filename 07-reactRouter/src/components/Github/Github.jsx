import React, { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  const dat = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="bg-gray-600 text-center text-white text-3xl p-4 m-4 ">
      Github Followers: {data.followers}
      <img src={dat.avatar_url} alt="Git pic" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
