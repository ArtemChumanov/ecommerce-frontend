import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const trelloAPI = createApi({
  reducerPath: "trelloAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Trello"],
  endpoints: (build) => ({
    fetchAllTasks: build.query({
      query: () => ({
        url: "/tasks",
        // params:{
        //     _
        // }
      }),
      providesTags: (result) => ["Trello"],
    }),
    updateTask: build.mutation({
      query: (task) => {
        return {
          url: `/tasks/${task.id}`,
          method: "PUT",
          body: task,
        };
      },
      invalidatesTags: ["Trello"],
    }),
  }),
});
