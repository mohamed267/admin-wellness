const storagePrefix = 'wellness-admin';

const storage = {
  getToken: () => {
    return window.localStorage.getItem(`${storagePrefix}token`);
    // return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`) as string)
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, token);
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
