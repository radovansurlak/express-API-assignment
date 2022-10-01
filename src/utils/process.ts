import { Server } from 'http';

export function loadProcessHandlers(server: Server) {
  process.on('unhandledRejection', (error: Error | any) => {
    console.log(`Unhandled Rejection: ${error.message || error}`);
    server.close(() => {
      process.exit(1);
    });
  });

  process.on('uncaughtException', (error: Error | any) => {
    console.log(`Uncaught Exception: ${error.message || error}`);
    server.close(() => {
      process.exit(1);
    });
  });
}
