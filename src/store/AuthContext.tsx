import React, { useContext, useLayoutEffect, useReducer } from "react";
import { User } from "@/api/types/user";
import instance from "@/api/instance";
import { logout, refresh } from "@/api/auth";

interface AuthState {
  accessToken: string | null;
  setAccessToken: (val: string | null) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  authLoading: boolean;
  setAuthLoading: (val: boolean) => void;

  logoutUser: () => Promise<boolean>;
}

type AuthActions =
  | {
      type: "SET_ACCESS_TOKEN";
      payload: string | null;
    }
  | {
      type: "SET_USER";
      payload: User | null;
    }
  | {
      type: "SET_LOADING";
      payload: boolean;
    };

const initialState: AuthState = {
  accessToken: null,
  setAccessToken: () => {},
  user: null,
  setUser: () => {},
  authLoading: false,
  setAuthLoading: () => {},

  logoutUser: async () => false,
};

const authContext = React.createContext(initialState);

export const useAuthContext = () => useContext(authContext);

const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return { ...state, accessToken: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_LOADING":
      return { ...state, authLoading: action.payload };
    default:
      return state;
  }
};

const useAuthReducer = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const setAccessToken = (val: string | null) => {
    dispatch({ type: "SET_ACCESS_TOKEN", payload: val });
  };
  const setUser = (val: User | null) => {
    dispatch({ type: "SET_USER", payload: val });
  };

  const setAuthLoading = (val: boolean) => {
    dispatch({ type: "SET_LOADING", payload: val });
  };

  const logoutUser = async () => {
    try {
      const res = await logout();
      if (res.success) {
        setAccessToken(null);
        setUser(null);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  instance.interceptors.request.use(
    (config) => {
      if (state.accessToken) {
        config.headers.Authorization = `Bearer ${state.accessToken}`;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );

  // instance.interceptors.response.use(
  //   (res) => res,
  //   async (err) => {
  //     const originalRequest = err.response.config;
  //     if (err.response.status === 401 && !originalRequest._retry) {
  //       try {
  //         originalRequest._retry = true;
  //         const res = await instance.post("/auth/refresh");

  //         if (res.status === 401) {
  //           setAccessToken(null);
  //           setUser(null);
  //           return Promise.reject("Unauthorized");
  //         }

  //         const data = res.data;

  //         if (data.access_token) {
  //           originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
  //           setAccessToken(data.access_token);
  //           setUser(data.user);
  //           return instance(originalRequest);
  //         }
  //         return Promise.reject("Unauthorized");
  //       } catch (error) {
  //         return Promise.reject(error);
  //       }
  //     } else {
  //       return Promise.reject(err);
  //     }
  //   }
  // );

  useLayoutEffect(() => {
    setAuthLoading(true);
    refresh()
      .then((res) => {
        if (res?.access_token) {
          setAccessToken(res.access_token);
          setUser(res.user);
        } else {
          setAccessToken(null);
          setUser(null);
        }
      })
      .catch(() => {
        setAccessToken(null);
        setUser(null);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  }, []);

  return {
    ...state,
    setAccessToken,
    setUser,
    setAuthLoading,
    logoutUser,
  };
};

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const values = useAuthReducer();
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
