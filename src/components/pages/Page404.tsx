import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h2>ページが見つかりません</h2>
      <Link to="/" />
    </div>
  );
};

export default Page404;
