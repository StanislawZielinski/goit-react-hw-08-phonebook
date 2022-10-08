import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
        prepareHeaders: (headers, { getState }) => {
            const token = getState().token.token;
            console.log(token);
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
        
            return headers
          },
        tagTypes: ['contacts', 'user'],
        endpoints: builder => (
            {
                getPosts: builder.query({
                    query: () => '/contacts',
                    transformResponse: res => res.sort((a,b)=>b.id - a.id),
                    providesTags: ['contacts']
                }),
                addNewUser: builder.mutation({
                    query: userData => ({
                        url: '/users/signup',
                        method: 'POST',
                        // Include the entire post object as the body of the request
                        body: userData
                    }),
                    invalidatesTags: ['user']
                }),
                login: builder.mutation({
                    query: userData => ({
                        url: '/users/login',
                        method: 'POST',
                        // Include the entire post object as the body of the request
                        body: userData
                    }),
                    invalidatesTags: ['user']
                }),
                // deletePost: builder.mutation({
                //     query(id) {
                //         return {
                //             url: `/contacts/${id}`,
                //             method: 'DELETE',
                //         }
                //     },
                //     invalidatesTags: ['contacts']
                // })
            }
        )
    }
)
export const { useGetPostsQuery, useAddNewUserMutation, useLoginMutation } = apiSlice;



// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const apiSlice = createApi(
//     {
//         reducerPath: 'api',
//         baseQuery: fetchBaseQuery({ baseUrl: 'https://6332be4ba54a0e83d25775e6.mockapi.io/contacts' }),
//         tagTypes: ['contacts'],
//         endpoints: builder => (
//             {
//                 getPosts: builder.query({
//                     query: () => '/contacts',
//                     transformResponse: res => res.sort((a,b)=>b.id - a.id),
//                     providesTags: ['contacts']
//                 }),

//                 addNewPost: builder.mutation({
//                     query: initialPost => ({
//                         url: '/contacts',
//                         method: 'POST',
//                         // Include the entire post object as the body of the request
//                         body: initialPost
//                     }),
//                     invalidatesTags: ['contacts']
//                 }),
//                 deletePost: builder.mutation({
//                     query(id) {
//                         return {
//                             url: `/contacts/${id}`,
//                             method: 'DELETE',
//                         }
//                     },
//                     invalidatesTags: ['contacts']
//                 })
//             }
//         )
//     }
// )
// export const { useGetPostsQuery, useAddNewPostMutation, useDeletePostMutation } = apiSlice;