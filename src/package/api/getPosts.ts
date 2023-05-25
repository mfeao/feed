import axios from 'axios';
import qs from 'qs';

type Response = {
  data: Array<{
    title: string;
    author: string;
    genre: string;
    content: string;
  }>;
  total: number;
}

const getPosts = () => {
  // const url = 'https://fakerapi.it/api/v1/texts';
  // const params = {
  //   _quantity: 12,
  //   _locale: 'en_US',
  //   _characters: 2500,
  //   _seed: 9999,
  // };
  const url = '/fixtures/feed.json';
  const params = {};

  const serializeParams = (params: object) => (
    Object.keys(params).length
      ? `?${qs.stringify(params, { arrayFormat: 'brackets' })}`
      : ''
  );

  return axios.get<Response>(
    `${url}${serializeParams(params)}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(({ data }) => data);
};

getPosts.successPayload = ({ data, total }: Response) => ({
  items: data,
  total,
});

export default getPosts;
