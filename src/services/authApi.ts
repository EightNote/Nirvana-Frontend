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
      query: (body: { username: string; password: string }) => {
        return {
          url: "/sign-in/",
          method: "POST",
          body,
        };
      },
    }),
    RegisterUser: builder.mutation({
      query: (body: {
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        dateOfBirth: string;
        gender: string;
        interests: Array<number>;
      }) => {
        let jsonbody = JSON.stringify(body);
        return {
          mode: "cors",
          url: "/sign-up/user/",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonbody,
        };
      },
    }),
    RegisterArtist: builder.mutation({
      query: (body: {
        username: string;
        password: string;
        about: string;
        twitter: string;
        facebook: string;
        instagram: string;
        record_label_id: string;
        nationality_id: number;
        role: string;
      }) => {
        let jsonbody = JSON.stringify(body);
        return {
          mode: "no-cors",
          url: "/sign-up/artist/",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonbody,
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useRegisterArtistMutation,
} = authApi;
