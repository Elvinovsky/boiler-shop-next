import Link from 'next/link'
import styles from '@/styles/footer/index.module.scss'

const FooterLogo = () => (
  <div className={styles.footer__top__item}>
    <Link href={'/dashboard'} passHref legacyBehavior>
      <a className={styles.footer__top__item__logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/footer-logo.svg" alt="logo" />
        <span className={styles.footer__top__item__logo__text}>
          Детали для газоваых котлов
        </span>
      </a>
    </Link>
  </div>
)

export default FooterLogo
