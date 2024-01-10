import { useDispatch, useSelector } from "react-redux";
import { updateSearchTerm } from "../store/store";
function CarSearch() {
  const { searchTerm } = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const handleSearchTermChange = (e) => {
    dispatch(updateSearchTerm(e.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">Search</h3>
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
    </div>
  );
}
export default CarSearch;
