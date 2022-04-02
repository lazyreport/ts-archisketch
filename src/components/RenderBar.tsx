import React from "react";
import { IoIosClose } from "react-icons/io";
import { IoMdPricetag } from "react-icons/io";
import { BiDownload, BiTrash } from "react-icons/bi";

interface Props {
  clickedURL: string;
  SetClickedURL: React.Dispatch<React.SetStateAction<string>>;
  mappingList: string[];
  setMappingList: React.Dispatch<React.SetStateAction<string[]>>;
  downloadImg: (downloadUrl: string) => void;
}

const RenderBar = ({
  clickedURL,
  SetClickedURL,
  setMappingList,
  mappingList,
  downloadImg,
}: Props) => {
  return (
    <div className="render-bar">
      <div className="render-bar-left">
        <button
          className="render-close-btn"
          type="button"
          onClick={() => SetClickedURL("")}
        >
          <IoIosClose />
        </button>
        <div className="render-bar-info">
          <span className="render-date">2021.10.8</span>
          <span className="render-resolution">해상도: 3820x2160</span>
        </div>
      </div>

      <div className="render-bar-right">
        <div className="render-bar-btns">
          <button className="render-bar-tag">
            <IoMdPricetag />
          </button>
          <button
            type="button"
            className="render-bar-download"
            onClick={() => {
              downloadImg(clickedURL);
            }}
          >
            <BiDownload /> 다운로드
          </button>
          <button
            className="render-bar-delete"
            type="button"
            onClick={() => {
              setMappingList(
                mappingList.filter((x) => {
                  return x !== clickedURL;
                })
              );
              SetClickedURL("");
            }}
          >
            <BiTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderBar;
