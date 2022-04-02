import "./styles.css";
import TopBar from "./TopBar";
import Sample from "../sample.json";
import Card from "./Card";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import Render from "./Render";
import axios from "axios";

const Gallery = () => {
  const items = Sample.renderings;
  const urls = items.map((value) => {
    return value._id;
  });
  const [clickedURL, SetClickedURL] = useState<string>("");
  const [mappingList, setMappingList] = useState<string[]>(urls);
  const [checkedList, setCheckedList] = useState<string[]>([]);
  useState<boolean>(true);
  const [selectAll, setSeletAll] = useState<boolean>(false);

  const downloadImg = (downloadUrl: string) => {
    axios({
      url: downloadUrl,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", downloadUrl);
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <div className="gallery">
      <div className="close-btn-container">
        <button className="close-btn">
          <IoIosClose />
        </button>
      </div>
      <div className="gallery-container">
        <TopBar
          loadedItems={mappingList.length}
          checkedList={checkedList}
          setCheckedList={setCheckedList}
          setSeletAll={setSeletAll}
          selectAll={selectAll}
          mappingList={mappingList}
          setMappingList={setMappingList}
          downloadImg={downloadImg}
        />
        <div className="card-group row row-cols-md-4 g-3">
          {mappingList.map((value: string) => (
            <Card
              url={value}
              SetClickedURL={SetClickedURL}
              setMappingList={setMappingList}
              mappingList={mappingList}
              setCheckedList={setCheckedList}
              checkedList={checkedList}
              selectAll={selectAll}
              setSeletAll={setSeletAll}
              downloadImg={downloadImg}
            />
          ))}
        </div>
      </div>
      <div className="render-container">
        <Render
          clickedURL={clickedURL}
          SetClickedURL={SetClickedURL}
          mappingList={mappingList}
          setMappingList={setMappingList}
          downloadImg={downloadImg}
        />
      </div>
    </div>
  );
};

export default Gallery;
