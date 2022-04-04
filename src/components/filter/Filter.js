import { useDispatch, useSelector } from "react-redux"
import { filterCategory, getSelectedCategory } from '../../features/filter/filterSlice'

export const Filter = ({ category }) => {

    const dispatch = useDispatch();
    const selecCategory = useSelector(getSelectedCategory);

    return (
        <span
            onClick={() =>
                dispatch(
                    filterCategory(category),
                    console.log(filterCategory(category))
                )
            }
            className={selecCategory === category ? "btn-filter active" : "btn-filter"}
        >
            {category}
        </span>
    )
}
