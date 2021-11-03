import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>©2021 masamicooks.com</div>
  </Container>
)

export default Footer
