import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  // Specify store reducer path where all the API states object will be stored
  reducerPath: "albums",
  // fetchBaseQuery is a RTK configured version of fetch()
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    // fetchFn property is used to override the fetch function
    fetchFn: async (...args) => {
      // ReMOVE FOR PRODUCTION
      await pause(1000);
      return fetch(...args);
    },
  }),
  // this is where we specify the various requests and endpoint
  endpoints(builder) {
    return {
      // Name of the generated  hook used for this request: albumsApi.useFetchAlbumsQuery()
      fetchAlbums: builder.query({
        // Tags have to ben array containing a string or object with with type and id
        // Tags property can also be a callback that is passed result, error, arg parameter, that returns the tag array
        providesTags: (result, error, user) => {
          const tags = result.map((album) => {
            return { type: "Album", id: album.id };
          });
          tags.push({ type: "UsersAlbums", id: user.id });

          return tags;
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (reult, error, user) => {
          return [{ type: "UsersAlbums", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: (reult, error, album) => {
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
