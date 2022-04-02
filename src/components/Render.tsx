import React from "react";
import { createPortal } from "react-dom";
import RenderBar from "./RenderBar";

interface Props {
  clickedURL: string;
  SetClickedURL: React.Dispatch<React.SetStateAction<string>>;
  mappingList: string[];
  setMappingList: React.Dispatch<React.SetStateAction<string[]>>;
  downloadImg: (downloadUrl: string) => void;
}

const Render = ({
  clickedURL,
  SetClickedURL,
  mappingList,
  setMappingList,
  downloadImg,
}: Props) => {
  if (!clickedURL) return null;
  return createPortal(
    <div className="render">
      <RenderBar
        SetClickedURL={SetClickedURL}
        clickedURL={clickedURL}
        mappingList={mappingList}
        setMappingList={setMappingList}
        downloadImg={downloadImg}
      />
      <div className="render-img-container">
        <button
          className="render-prev-btn"
          type="button"
          onClick={() => {
            let current = mappingList.indexOf(clickedURL);
            SetClickedURL(mappingList[current - 1]);
          }}
        >
          prev
        </button>
        <button
          className="render-next-btn"
          type="button"
          onClick={() => {
            let current = mappingList.indexOf(clickedURL);
            SetClickedURL(mappingList[current + 1]);
          }}
        >
          next
        </button>
        <img className="render-img" src={clickedURL} alt="" />
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Render;
