const _resolveSlash = (path: string) => {
  if (path.startsWith("/")) {
    path = path.slice(1);
  }
  if (path.endsWith("/")) {
    path = path.slice(0, path.length - 1);
  }

  return path;
};

const routeResolver = (...routes: string[]) => {
  return "/" + routes.map((ele) => _resolveSlash(ele)).join("/");
};

export { routeResolver };
