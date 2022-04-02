import "./styles.css";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  url: string;
  SetClickedURL: React.Dispatch<React.SetStateAction<string>>;
  setMappingList: React.Dispatch<React.SetStateAction<string[]>>;
  mappingList: string[];
  setCheckedList: React.Dispatch<React.SetStateAction<string[]>>;
  checkedList: string[];
  setSeletAll: React.Dispatch<React.SetStateAction<boolean>>;
  selectAll: boolean;
  downloadImg: (downloadUrl: string) => void;
}

const Card = ({
  url,
  SetClickedURL,
  setMappingList,
  mappingList,
  setCheckedList,
  checkedList,
  selectAll,
  downloadImg,
}: Props) => {
  return (
    <div className="gallery-card col">
      <div className="gallery-card-inner card" key={url}>
        <div
          className="gallery-card-overlay"
          onClick={() => SetClickedURL(url)}
        ></div>
        <img className="gallery-card-img card-img-top" src={url} alt="render" />
        <div className="gallery-card-btns">
          <div className="gallery-checkbox-container">
            <input
              type="checkbox"
              defaultChecked={selectAll}
              className="gallery-checkbox-btn"
              onChange={() => {
                if (checkedList.includes(url)) {
                  setCheckedList(
                    checkedList.filter((x) => {
                      return x !== url;
                    })
                  );
                } else {
                  setCheckedList([...checkedList, url]);
                }
              }}
            />
          </div>
          <div className="gallery-dropdown-container">
            <button className="gallery-dropdown-btn" type="button">
              <BsThreeDots />
            </button>
            <div className="gallery-dropdown-menu">
              <button
                type="button"
                onClick={() => {
                  downloadImg(url);
                }}
              >
                다운로드
              </button>
              <button
                type="button"
                onClick={() => {
                  setMappingList(
                    mappingList.filter((x) => {
                      return x !== url;
                    })
                  );
                  setCheckedList([]);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
