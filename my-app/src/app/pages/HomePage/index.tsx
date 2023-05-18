import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Masthead } from './Masthead';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';
import axios from 'axios';

export function HomePage() {
  const [postList, setPostList] = React.useState([]);
  axios.defaults.baseURL = 'http://192.168.1.59:8000/api';
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';

  React.useEffect(() => {
    axios
      .get('/blogs')
      .then(function (response) {
        console.log({ '=====': response });
      })
      .catch(function (error) {
        // handle error
        console.log({ error });
      });
  }, []);
  console.log({ postList });
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Masthead />
        <Features />
      </PageWrapper>
    </>
  );
}
