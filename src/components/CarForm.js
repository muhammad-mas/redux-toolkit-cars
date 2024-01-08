import { useDispatch, useSelector } from "react-redux";
import { updateName, updateCost, addCar } from "../store/store";

function CarForm() {
  const { name, cost } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const handleNameUpdate = (e) => dispatch(updateName(e.target.value));
  const handleCostUpdate = (e) =>
    dispatch(updateCost(parseInt(e.target.value) || 0));
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    console.log(name, cost);
    dispatch(addCar({ name, cost }));
    // dispatch(resetForm());
  };
  return (
    <div className="car-form  panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmitUpdate}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Car Name"
                value={name}
                onChange={handleNameUpdate}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Car Cost"
                value={cost || ""}
                onChange={handleCostUpdate}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-link"
                // onClick={(e) => {
                //   e.preventDefault();
                //   addCar({ name, cost });
                //   resetForm();
                // }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default CarForm;
