import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { CREATE_POST, DELETE_POST, UPDATE_POST } from './GraphQL/Mutation';
import { getALL } from './GraphQL/Query';

function App() {
  const { loading, error, data } = useQuery(getALL);
  const [createPost, { err }] = useMutation(CREATE_POST);
  const [deletePost, { errr }] = useMutation(DELETE_POST);
  const [updatePost, { errrr }] = useMutation(UPDATE_POST);

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  if (loading) return 'Loading';

  const addPost = () => {
    createPost({
      variables: {
        title,
        description,
      },
    });
  };

  console.log(error, err, errr, errrr);

  const updateHandler = (id) => {
    updatePost({
      variables: {
        id,
        title,
        description,
      },
    });
  };

  const removePost = (id) => {
    deletePost({
      variables: {
        id,
      },
    });
  };

  return (
    <div className="App">
      {data.getAll.map((info) => (
        <>
          <p key={info.title}>
            {info.title}
            {' '}
            ----
            {info.description}
            {' '}
            <button type="button" onClick={() => removePost(info.id)}> Delete it </button>
            <button type="button" onClick={() => updateHandler(info.id)}> Update it </button>
          </p>
        </>
      ))}
      <br />
      <form>
        Title---
        {' '}
        <input onChange={(e) => setTitle(e.target.value)} />
        <br />
        Description ---
        <input onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button type="button" onClick={() => addPost()}>Add Post</button>
      </form>
    </div>
  );
}

export default App;
