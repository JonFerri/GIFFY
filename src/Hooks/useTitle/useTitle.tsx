// import { useEffect } from "react";

interface useTitleProps {
    title: string
}

const useTitle = ({title}:useTitleProps)=> {
    document.title = title

}

export default useTitle