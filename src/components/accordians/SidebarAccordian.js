import { GridiconsCross, TablerPlus } from "../icons/Icons";

const SidebarAccordian = ({
    title,
    data,
    visibleOptions,
    setVisibleOptions,
}) => {
    return (
        <div className="w-full">
            <div
                className="flex justify-between items-center hover:text-[#ff24aa] cursor-pointer mb-1"
                onClick={() => setVisibleOptions(!visibleOptions)}
            >
                <button className="">{title}</button>
                <span className={`border rounded-md`}>
                    {visibleOptions ? <GridiconsCross /> : <TablerPlus />}
                </span>
            </div>
            <ul
                className={`overflow-hidden transition-[max-height] duration-500 ease-in ${
                    visibleOptions ? "max-h-60" : "max-h-0"
                } max-w-md text-gray-500 list-disc list-inside dark:text-gray-400`}
            >
                {visibleOptions &&
                    data.map((item) => {
                        return (
                            <li
                                className={`hover:text-[#ff24aa] ease-in-out cursor-pointer`}
                                key={item}
                            >
                                {item}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default SidebarAccordian;
