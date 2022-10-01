import { app } from './server';
import { loadProcessHandlers } from './utils/process';

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`⚡️ Server is running on http://localhost:${port}`);
});

loadProcessHandlers(server);
