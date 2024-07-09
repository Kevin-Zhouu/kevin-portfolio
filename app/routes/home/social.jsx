import React from 'react';
import styles from './social.module.css';

import { Icon } from '~/components/icon';
import { Linkedin, Github, Twitter } from 'lucide-react';

import linkedinIcon from '~/assets/linkedin-logo.png';
import githubIcon from '~/assets/github-logo.png';
const Social = () => {
  return (
    <div className={styles.socialContainer}>
      <a
        key={'LinkedIn'}
        className={styles.navIconLink}
        aria-label={'LinkedIn'}
        href={'https://www.linkedin.com/in/kevinzhou2003/'}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <Linkedin className={styles.navIcon} icon={'github'} /> */}

        <img src={linkedinIcon} alt={`linkedin logo`} className={styles.navIcon} />
      </a>
      <a
        key={'Github'}
        className={styles.navIconLink}
        aria-label={'LinkedIn'}
        href={'https://github.com/Kevin-Zhouu'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className={styles.navIcon} icon={'github'} />
      </a>
    </div>
  );
};

export default Social;
