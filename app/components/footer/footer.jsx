import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} Built by ${config.name} with ❤️`}
      </span>
      <p style={{ color: '#3b3b3b' }}>Speacial thank to HamishMW</p>
    </Text>
  </footer>
);
