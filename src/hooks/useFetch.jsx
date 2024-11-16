import { useState, useEffect, useMemo } from 'react';

const useFetch = (url, method = 'GET', body = null) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 
    const [isError, setIsError] = useState(false);

    // Memoized fetch function
    const fetchData = useMemo(() => {
        return async () => {
            try {
                const options = {
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    ...(body && { body: JSON.stringify(body) }), // Add body if it exists
                };

                const res = await fetch(url, options);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const dataRes = await res.json();
                setData(dataRes);
            } catch (e) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
    }, [url, method, body]); // Dependencies include method and body

    useEffect(() => {
        fetchData(); // Call the memoized fetch function
    }, [fetchData]); // Dependency array to ensure fetchData is up-to-date

    return { data, isLoading, isError };
};

export default useFetch;
