import express from 'express';
import { router } from './routes';
import { authMiddlewareForProm } from './Middleware/authMiddlewareForProm';
import cors from 'cors'
//eslint-disable-next-line
const promMid = require('express-prometheus-middleware');
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())
app.use('/', router)
app.use(promMid({
    metricsPath: '/metrics',

    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    authenticate: authMiddlewareForProm
}))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});