import { useState } from "react";
import "./App.css";
import logo from "./image.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsCheckCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [image, setImage] = useState(null);

  const submit = async (e) => {
    setPreviewMode(false);
    setLoading(true);
    e.preventDefault();
    const files = e.target.files;
    const formData = new FormData();
    formData.append("image", files[0]);
    const res = await fetch("http://localhost:5500/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setImage(data.path);
    setPreviewMode(true);
    setLoading(false);
  };

  const test = async (e) => {
    setPreviewMode(false);
    setLoading(true);
    e.preventDefault();
    const files = e.dataTransfer.files;
    const formData = new FormData();
    formData.append("image", files[0]);
    const res = await fetch("http://localhost:5500/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setImage(data.path);
    setPreviewMode(true);
    setLoading(false);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const notify = () =>
    toast.success("Link Copied", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  if (loading) {
    return (
      <div className="loading-container">
        <p>Uploading...</p>
        <div className="loading"></div>
      </div>
    );
  }

  if (previewMode) {
    return (
      <div className="preview-container">
        <BsCheckCircleFill className="check-icon" />
        <p>Uploaded Successfully!</p>
        <img src={image} alt="" />
        <div className="link-container">
          <p className="link">{image}</p>
          <CopyToClipboard text={image}>
            <button onClick={notify}>Copy Link</button>
          </CopyToClipboard>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Upload your image</h1>
      <p>File should be jpeg, png</p>
      <div
        className="file-container"
        draggable
        onDrop={(e) => test(e)}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
      >
        <img src={logo} alt="" />
        <p>Drag & Drop your image here</p>
      </div>
      <p>Or</p>
      <form id="form">
        <input
          type="file"
          name="image"
          id="file"
          className="file"
          onChange={(e) => submit(e)}
        />
        <label htmlFor="file" onChange={(e) => submit(e)}>
          Select file
        </label>
      </form>
    </div>
  );
}

export default App;
