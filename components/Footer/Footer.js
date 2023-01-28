import React from 'react';
import styles from './Footer.module.css';
import { CONFIG } from '../../utils/consts';
import AppIcon from '../AppIcon';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright &copy; {new Date().getFullYear()} {CONFIG.website.title}
      <br />
      <a href="https://www.facebook.com/oltreilteatronews">
        <AppIcon name="facebook" />
      </a>
    </footer>
  );
};

export default Footer;
