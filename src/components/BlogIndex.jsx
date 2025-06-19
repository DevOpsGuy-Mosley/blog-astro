import React, { useState } from 'react';
import ArticleModal from './ArticleModal.jsx';

export default function BlogIndex({ posts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (post) => {
    setModalTitle(post.data.title);
    setModalContent(post.body);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent('');
    setModalTitle('');
  };

  return (
    <>
      <h1>Articles du Blog</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map(post => (
            <li key={post.slug} style={{ marginBottom: '1.5rem' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); openModal(post); }} style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--orange)', textDecoration: 'none' }}>
                {post.data.title}
              </a>
              <br />
              <small><i>{post.data.pubDate?.toString()}</i> - par {post.data.author}</small>
              <p>{post.data.description ?? ''}</p>
            </li>
          ))
        ) : (
          <p>Aucun article disponible pour le moment.</p>
        )}
      </ul>
      <ArticleModal isOpen={isOpen} onClose={closeModal} content={modalContent} title={modalTitle} />
    </>
  );
}
