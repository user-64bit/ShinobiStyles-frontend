import { Link } from "react-router-dom";

const GoForItBtn = ({ item }) => {
    return (
        <Link
            to={"/products/" + item?.title.split(" ").join("-")}
            state={{ data: item }}
        >
            <button className="w-24 border bg-[#5e3fde] py-3 text-white hover:bg-[#ff24aa] transition-all ease-in-out rounded-lg">
                Go for it
            </button>
        </Link>
    );
};
export default GoForItBtn;
