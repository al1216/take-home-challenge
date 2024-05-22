import React from "react";
import "./style.css";
import useStoryContext from "../hooks/useProductContext";
import axios from "axios";

export default function Index() {
  const { title, setTitle, description, setDescription, file, setFile } =
    useStoryContext();

  let handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);
    console.log(title,description, file);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/upload`,
        { formData }
      );

      console.log(response.data);
    } catch (err) {
      console.error("error", err);
    }
  };
  return (
    <div className="uploadPDFFile">
      <h1 className="heading-document-upload">
        Fill the form and Upload the Document
      </h1>
      <form className="form-uploadFile" onSubmit={handleSubmit}>
        <label htmlFor="Title" className="title_label">
          Title :
        </label>
        <input
          type="text"
          name="title"
          className="title_document"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="Description" className="desc_label">
          Description
        </label>
        <textarea
          name="desc"
          className="description_document"
          cols="10"
          rows="10"
          placeholder="Enter the description of document"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label htmlFor="File" className="upload_label">
          Upload File:
        </label>
        <input
          type="file"
          name="file"
          accept="application/pdf"
          className="upload_document"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit" className="upload-document-btn">
          Upload
        </button>
      </form>
    </div>
  );
}
