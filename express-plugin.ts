/**
 * From: https://noam.hashnode.dev/using-vite-to-serve-and-hot-reload-react-app-express-api-together
 * Instructs vite to load on its server the path we send it as a parameter.
 * Also set the vite process environment variable to true to differentiate when the express server is called using this plugin or not.
 *
 * @param path The path of the server
 */

export default function express(path: string) {
  return {
    name: "vite-plugin-express",
    configureServer: async (server: any) => {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        process.env["VITE"] = "true";
        try {
          const { app } = await server.ssrLoadModule(path);
          app(req, res, next);
        } catch (err) {
          console.error(err);
        }
      });
    },
  };
}
