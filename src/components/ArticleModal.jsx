import React from 'react';

export default function ArticleModal({ isOpen, onClose, content, title }) {
  if (!isOpen) return null;

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={overlayStyle}>
      <div className="modal-content" onClick={stopPropagation} style={contentStyle}>
        <div className="modal-header" style={headerStyle}>
          <h2>{title}</h2>
          <button aria-label="Close modal" onClick={onClose} style={closeButtonStyle}>
            &times;
          </button>
        </div>
        <div className="modal-body" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const contentStyle = {
  background: 'white',
  maxWidth: '600px',
  maxHeight: '80vh',
  overflowY: 'auto',
  padding: '1rem 2rem',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const closeButtonStyle = {
  cursor: 'pointer',
  fontSize: '1.5rem',
  border: 'none',
  background: 'none',
};
