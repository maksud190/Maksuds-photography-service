import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} - M.Photography`;
    },[title])
};

export default useTitle;