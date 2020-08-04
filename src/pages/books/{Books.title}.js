import React from 'react';
import { graphql } from 'gatsby';

const Book =  ({data}) => {
  return (
    <div>
      <h2>{data.books.title}</h2>
      <h3>by <em>{data.books.author}</em></h3>
    </div>
  )};

export const query = graphql`
    query ($id: String) {
      books(id: { eq: $id}) {
        title
        author
      }
    }
`


export default Book;
