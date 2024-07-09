import React from 'react';
import styles from './iconButton.module.css';

export const IconButton = ({ file, ...props }) => {
  return <img src={file} className={styles.icon} width={30} {...props} />;
};
