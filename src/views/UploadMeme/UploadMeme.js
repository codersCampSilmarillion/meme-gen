import React, { useState } from "react";
import ChooseMemeTemplate from "../../components/ChooseMemeTemplate";
import UploadMemeForm from "../../components/UploadMemeForm";

const UploadMeme = () => {
  const [selectedTemplate, setSelectedTemplate] = useState([]);
  return (
    <>
      <ChooseMemeTemplate
        setSelectedTemplate={setSelectedTemplate}
        selectedTemplate={selectedTemplate}
      />
      <UploadMemeForm selectedTemplate={selectedTemplate.id} />
    </>
  );
};

export default UploadMeme;
