import { getMetrics } from "../api/getMetrics";
import { useQuery } from "@tanstack/react-query";
import styles from './RightSide.module.scss'
import Loader from "./Loader";
const RightSide = () => {
    const { data, isSuccess, isFetching, isLoading } = useQuery({
        queryKey: ['getMetrics'],
        queryFn: getMetrics,
        refetchInterval: 30000
    })


    return (
        isSuccess && (!isFetching && !isLoading) ? <pre className={styles.RightSide}>
            <h3 className={styles.Title}>Prometheus Metrics</h3>
            {data}
        </pre> : <Loader />
    );
}

export default RightSide;