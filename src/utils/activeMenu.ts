export const activeMenu = (menuPath: string, pathname: string) => {
  return pathname.includes(menuPath);
};
