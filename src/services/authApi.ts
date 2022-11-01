import React from "react";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // http://localhost:8080/user/sign-up/
    baseUrl: "http://localhost:8080/user/",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { "username": string; "password": string }) => {
        return {
          url: "/sign-up/",
          method: "POST",
          body,
        };
      },
    }),
    RegisterUser: builder.mutation({
      query: (body: {
        username: string;
        password: string;
      }) => {
        let jsonbody = JSON.stringify(body)
        return {
          mode: 'no-cors',
          url: "/sign-in/",
          method: "POST",
          jsonbody,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
