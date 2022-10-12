import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().token.token;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
              headers.set('Authorization', `Bearer ${token}`)
            }
        
            return headers
          }}),
        tagTypes: ['contacts', 'user'],
        endpoints: builder => (
            {
                getPosts: builder.query({
                    query: () => '/contacts',
                    transformResponse: res => res.sort((a,b)=>b.id - a.id),
                    providesTags: ['contacts'],
                }),
                addNewPost: builder.mutation({
                    query: initialPost => ({
                        url: '/contacts',
                        method: 'POST',
                        // Include the entire post object as the body of the request
                        body: initialPost
                    }),
                    invalidatesTags: ['contacts']
                }),
                addNewUser: builder.mutation({
                    query: userData => ({
                        url: '/users/signup',
                        method: 'POST',
                        body: userData
                    }),
                    invalidatesTags: ['user']
                }),
                login: builder.mutation({
                    query: userData => ({
                        url: '/users/login',
                        method: 'POST',
                        body: userData
                    }),
                    invalidatesTags: ['user']
                }),
                deletePost: builder.mutation({
                    query(id) {
                        return {
                            url: `/contacts/${id}`,
                            method: 'DELETE',
                        }
                    },
                    invalidatesTags: ['contacts']
                }),
                updateContact: builder.mutation({
                    query({id, ...body}) {
                        return {
                            url: `/contacts/${id}`,
                            method: 'PATCH',
                            body
                        }
                    },
                    invalidatesTags: ['contacts']
                })
            }
        )
    }
)
export const { useGetPostsQuery, useAddNewUserMutation, useLoginMutation, useAddNewPostMutation, useDeletePostMutation, useUpdateContactMutation } = apiSlice;