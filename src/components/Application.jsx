import React, { Component } from 'react';
import { firestore } from '../firebase';
import { collectIdAndDocs } from '../utils';
import Posts from './Posts';

class Application extends Component {
  state = {
    posts: [],
  };

  componentDidMount = async () => {
    const snapshot = await firestore.collection('posts').get();

    const posts = snapshot.docs.map(collectIdAndDocs);
    this.setState({ posts });

    // snapshot.forEach((doc) => {
    //   const id = doc.id;
    //   const data = doc.data(); // all data from the document
    //   console.log({ data, id });
    // });
  };

  handleCreate = async (post) => {
    const { posts } = this.state;
    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();
    const newPost = collectIdAndDocs(doc);

    this.setState({ posts: [newPost, ...posts] });
  };

  handleRemove = async (id) => {
    const allPosts = this.state.posts;
    await firestore.doc(`posts/${id}`).delete();
    const posts = allPosts.filter((post) => post.id !== id);
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className='Application'>
        <h1>Think Piece</h1>
        <Posts
          posts={posts}
          onCreate={this.handleCreate}
          onRemove={this.handleRemove}
        />
      </main>
    );
  }
}

export default Application;