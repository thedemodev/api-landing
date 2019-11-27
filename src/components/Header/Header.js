import React, { useRef } from 'react'
import cx from 'classnames'
import Icon from '@santiment-network/ui/Icon'
import { injectIntl, Link } from 'gatsby-plugin-intl'
import AccountBtn from '../AccountBtn/AccountBtn'
import SantimentProductsTooltip from "../SantimentProductsTooltip/SantimentProductsTooltip"
import styles from './Header.module.scss'

const Header = ({ isAccountPage, intl }) => {
  const toggle = useRef(null)

  const closeNav = () => {
    toggle.current.checked = false
  }

  return (
    <header className={styles.header}>
      <div  className={styles.container}>
        <div className={styles.left}>

          <div className={styles.product}>
            <div className={styles.products}>
              <a className={styles.logo} href='https://app.santiment.net'>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none"><circle cx="19" cy="19" r="18.5" fill="#fff" stroke="#E7EAF3"/><path d="M9 18.648c0-.552.135-.966.407-1.242.272-.276.639-.414 1.102-.414.462 0 .83.139 1.101.414.272.276.407.69.407 1.242 0 .572-.135.995-.407 1.27-.272.276-.639.415-1.101.415-.463 0-.83-.139-1.102-.414-.272-.276-.407-.7-.407-1.271zM15.547 23.714c.403.236.88.438 1.434.606a5.853 5.853 0 0 0 1.705.251c.664 0 1.227-.163 1.69-.49.462-.328.694-.858.694-1.591 0-.615-.142-1.12-.423-1.517a4.733 4.733 0 0 0-1.07-1.07c-.433-.317-.901-.609-1.404-.874a7.48 7.48 0 0 1-1.404-.957 4.788 4.788 0 0 1-1.07-1.326c-.283-.511-.423-1.16-.423-1.945 0-1.257.346-2.204 1.04-2.843.695-.639 1.676-.958 2.943-.958.824 0 1.539.074 2.142.222.603.147 1.127.35 1.57.606l-.574 1.774a6.31 6.31 0 0 0-1.327-.488 6.23 6.23 0 0 0-1.54-.192c-.724 0-1.251.147-1.584.443-.332.296-.498.76-.498 1.39 0 .493.14.912.423 1.256.282.346.638.66 1.07.947.433.286.901.576 1.404.872.502.296.97.646 1.404 1.05.432.403.789.887 1.07 1.448.283.561.423 1.267.423 2.114a4.51 4.51 0 0 1-.272 1.567c-.18.493-.457.921-.83 1.286a4.075 4.075 0 0 1-1.388.872c-.553.217-1.202.326-1.946.326-.885 0-1.65-.084-2.293-.252-.644-.167-1.188-.389-1.63-.665l.665-1.862zM25.984 18.648c0-.552.136-.966.408-1.242.271-.276.638-.414 1.1-.414.464 0 .83.139 1.102.414.272.276.407.69.407 1.242 0 .572-.135.995-.407 1.27-.272.276-.638.415-1.101.415-.463 0-.83-.139-1.101-.414-.272-.276-.408-.7-.408-1.271z" fill="#2F354D"/></svg>
              </a>
              <SantimentProductsTooltip intl={intl}>
                <div className={styles.dividerLeft}/>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM13.3818 7.91355L14.0977 7.19891L13.353 6.45343C11.5014 4.60187 8.49938 4.60187 6.64782 6.45343L3.8456 9.25566C4.66756 10.078 6.00062 10.078 6.82299 9.25566L8.13631 7.94233C8.89947 7.17917 10.0175 6.98263 10.9632 7.35228L10.4044 7.91026L10.4048 7.91067C11.2264 8.73345 12.559 8.73469 13.3818 7.91355ZM13.353 13.5463L16.1548 10.7445C15.3324 9.92254 13.9994 9.92254 13.1778 10.7445L11.8645 12.0578C11.1013 12.821 9.98334 13.0175 9.03761 12.6479L9.59641 12.0903C8.77487 11.2671 7.44222 11.2659 6.61903 12.087L5.90274 12.8017L6.6474 13.5463C8.49937 15.3979 11.5014 15.3979 13.353 13.5463Z" fill="#5275FF"/>
                </svg>
                <div className={styles.productName}>API</div>
              </SantimentProductsTooltip></div>
          </div>
        </div>
        <label htmlFor='hamburger'>
          <Icon type='hamburger' />
        </label>
        <input id='hamburger' type='checkbox' ref={toggle} />
        <nav className={styles.nav}>
          <label htmlFor='hamburger' className={styles.close}>
            <Icon type='close' />
          </label>
          <Link className={styles.link} to='/#use-cases' onClick={closeNav}>
            {intl.formatMessage({ id: 'header.use_cases' })}
          </Link>
          <Link className={styles.link} to='/#pricing' onClick={closeNav}>
            {intl.formatMessage({ id: 'header.pricing' })}
          </Link>
          <a
            className={cx(styles.link, styles.linkLast)}
            href='mailto:support@santiment.net'
            onClick={closeNav}
          >
            {intl.formatMessage({ id: 'header.support' })}
          </a>
          <div className={styles.dividerRight}/>
          <AccountBtn isAccountPage={isAccountPage} onClick={closeNav} />
        </nav>
      </div>
    </header>
  )
}
export default injectIntl(Header)
