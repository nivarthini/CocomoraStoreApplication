import { useEffect, useState } from 'react';

export default function useFetchData(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((result) => {
                setData(result);
                setLoading(false);
            })
            .catch(() => {
                setError('Unable to load data');
                setLoading(false);
            });
    }, [url]);
    return { data, loading, error };
}
