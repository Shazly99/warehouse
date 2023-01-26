
import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    // console.log(isOpen);

    useEffect(() => {

    }, [isOpen])

    return {
        isOpen,
        toggle
    }
}

export default useFetch