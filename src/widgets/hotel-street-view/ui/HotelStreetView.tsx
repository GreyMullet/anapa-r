'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.css';

const images = [
  '/street.jpg',
  '/street1.jpg',
  '/street2.jpg',
];

export const HotelStreetView = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Вид с улицы</h2>
        </div>

        <div className={styles.gallery}>
          {images.map((src, index) => (
            <div 
              key={index} 
              className={styles.card}
              onClick={() => openModal(index)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Вид с улицы ${index + 1}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority={index === 0}
                />
                <div className={styles.overlay} />
              </div>

              <div className={styles.caption}>
                <p>Развернуть фото {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              ✕
            </button>
            
            <div className={styles.modalImageWrapper}>
              <Image
                src={images[selectedImage]}
                alt={`Вид с улицы ${selectedImage + 1}`}
                fill
                className={styles.modalImage}
                quality={95}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};