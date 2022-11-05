import request from 'graphql-request';

export async function fetcher(query: string) {
  return request(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}`, query);
}
