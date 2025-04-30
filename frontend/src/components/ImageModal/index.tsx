import React from 'react';
import './ImageModal.css';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>×</button>
        {title && <h3 className="image-modal-title">{title}</h3>}
        <div className="image-modal-image-container">
          <img src={imageUrl} alt={title || "Full size image"} className="image-modal-image" />
        </div>
      </div>
    </div>
  );
};

export default ImageModal; 