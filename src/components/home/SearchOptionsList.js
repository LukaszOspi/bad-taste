import SearchOptions from "./SearchOptions";
import "./SearchOptionsList.css";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import MediaContext from "../../context";
import keyLegend from "../../services/keyLegend";
import "../../index.css";

const SearchOptionsList = ({
  options,
  setDropdownSearchValue,
  setSearch,
  setDisplay,
}) => {
  const history = useHistory();
  const { mediaType } = useContext(MediaContext);
  const getTitleFromClick = (value, id) => {
    setDropdownSearchValue({ title: value, id });
    setSearch(value);
    setDisplay(false);
    history.push("/card-page");
  };

  return (
    <div className="search-options-List">
      {options &&
        options.map((option, index) => {
          return (
            <div
              onClick={() =>
                getTitleFromClick(
                  option[keyLegend[mediaType]["title"]],
                  option.id
                )
              }
              key={index}
              tabIndex="0"
            >
              <SearchOptions
                poster={option[keyLegend[mediaType]["poster"]]}
                title={option[keyLegend[mediaType]["title"]]}
                year={option[keyLegend[mediaType]["date"]]}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SearchOptionsList;
