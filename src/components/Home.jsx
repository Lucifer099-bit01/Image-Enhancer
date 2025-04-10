import React, { useState } from "react";
import Uploadimage from "./uploadimage"
import Previewimg from './previewimg'

const home = () => {
  const [uploadImage,setuplaodImage] = useState(null);
  const [enhancedImage,setenhancedImage] = useState(null);
  const [loading,setloader] = useState(false);

  const uploadImageHandler = (file) => {
     const uploaded = URL.createObjectURL(file);
     setuplaodImage(uploaded);
     setloader(true);
  };
    
  return (
    <>
      <Uploadimage uploadImageHandler = {uploadImageHandler}/>
      <Previewimg loading={loading} uploaded={uploadImage} enhanced = {enhancedImage}/>
    </>
  );
};

export default home;
