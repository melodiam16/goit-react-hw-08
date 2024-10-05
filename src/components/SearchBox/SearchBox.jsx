import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const changeFilter = (value) => {
    dispatch(setStatusFilter(value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(evt) => changeFilter(evt.target.value)}
      />
    </>
  );
}
