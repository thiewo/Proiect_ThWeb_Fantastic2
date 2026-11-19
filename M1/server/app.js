import express from 'express';
export function createApp() {
const app = express();
app.use(express.json({ limit: '16kb' }));
app.get('/api/health', (req, res) => {
res.json({ ok: true });
});
return app;
}