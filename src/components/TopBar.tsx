import React from "react";
import { AiOutlineDownload, AiOutlineDelete } from "react-icons/ai";

interface Props {
  loadedItems: number;
  checkedList: string[];
  selectAll: boolean;
  setSeletAll: React.Dispatch<React.SetStateAction<boolean>>;
  setMappingList: React.Dispatch<React.SetStateAction<string[]>>;
  mappingList: string[];
  setCheckedList: React.Dispatch<React.SetStateAction<string[]>>;
  downloadImg: (downloadUrl: string) => void;
}

const TopBar = ({
  loadedItems,
  checkedList,
  setCheckedList,
  selectAll,
  setSeletAll,
  setMappingList,
  mappingList,
  downloadImg,
}: Props) => {
  return (
    <div className="top-bar">
      {checkedList.length > 0 ? (
        <div className="top-bar-selected-info">
          <div className="top-bar-selected-length">
            <span>{checkedList.length}</span>
            <span>개의 렌더 이미지 선택 됨</span>
          </div>
          <div className="top-bar-select-all">
            <input
              type="checkbox"
              name="checkbox"
              id="selectAll"
              onChange={(e) => {
                setSeletAll(!selectAll);
                if (checkedList === mappingList) {
                  setCheckedList([]);
                } else {
                  setCheckedList(mappingList);
                }
              }}
            />
            <label htmlFor="selectAll">모두 선택</label>
          </div>
        </div>
      ) : (
        <div className="top-bar-info">
          <span>{loadedItems}</span>
          <span>개의 렌더샷</span>
        </div>
      )}
      <h2 className="top-bar-heading">갤러리</h2>
      {checkedList.length > 0 ? (
        <div className="tob-bar-selected-btns">
          <button
            className="tob-bar-selected-download"
            type="button"
            onClick={() => {
              checkedList.map((value) => {
                return downloadImg(value);
              });
            }}
          >
            <AiOutlineDownload />
          </button>
          <button
            className="tob-bar-selected-delete"
            type="button"
            onClick={() => {
              setMappingList(
                mappingList.filter((x) => {
                  return !checkedList.includes(x);
                })
              );
              setCheckedList([]);
              setSeletAll(false);
            }}
          >
            <AiOutlineDelete />
          </button>
          <button className="tob-bar-selected-cancel" type="button">
            선택 취소
          </button>
        </div>
      ) : (
        <div className="top-bar-dropdown">
           <div className="top-bar-dropdown-select">
        <span>모든 렌더샷</span>
        <span>{/* icon */}</span>
           </div>
           <div className="top-bar-dropdown-list">
           </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
