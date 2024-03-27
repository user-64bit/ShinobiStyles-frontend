import { useCallback, useEffect } from "react";

const useDebounce = (fn, dependencies, delay) => {
    const callback = useCallback(fn, dependencies);
    useEffect(() => {
        const timer = setTimeout(callback, delay);
        return () => clearTimeout(timer);
    }, [callback, delay]);
};
export default useDebounce;
