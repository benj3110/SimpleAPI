import { useQuery } from "@tanstack/react-query";
import { getTime } from "../api/getTime";
import { useEffect, useState } from "react";
import styles from './LeftSide.module.scss'
import Loader from "./Loader";
const LeftSide = () => {
    const { data, isSuccess, isFetching, isLoading } = useQuery({
        queryKey: ['getTime'],
        queryFn: getTime,
        refetchInterval: 30000
    })
    const [clientTime, setClientTime] = useState(Number(Math.floor(Date.now() / 1000)) - Number(data?.epoch))
    useEffect(() => {
        if (isSuccess) {
            const initialEpochTime = Number(data?.epoch);
            const currentTime = Math.floor(Date.now() / 1000);
            const timeDifference = currentTime - initialEpochTime;
            setClientTime(timeDifference);

            const interval = setInterval(() => {
                setClientTime(prev => prev + 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isSuccess, data]);
    useEffect(() => {
        console.log('suc', isSuccess)
        console.log('fet', isFetching)
        console.log('load', isLoading)
    })

    return (
        isSuccess && (!isFetching && !isLoading) ? <div className={styles.LeftSide}>
            <h3 className={styles.Title}>Epoch Time (s)</h3>
            {data?.epoch}
            <h3 className={styles.Title}>Client Time Difference (HH:MM:SS)</h3>
            {`00:00:${clientTime.toString().padStart(2, '0')}`}
        </div> : <Loader />
    );
}

export default LeftSide;