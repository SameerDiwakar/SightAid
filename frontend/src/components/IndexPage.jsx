import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import React from "react";

const IndexPage = () => {
  return (
    <div className="flex flex-col items-center">
      Go to Model
      <button className="bg-blue py-2 px-4 rounded-full"> <Link to={'/'}>Scan</Link></button>
  </div>
  )
}

export default IndexPage
