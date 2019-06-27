// https://jahed.dev/2018/02/09/using-css-modules-with-bem/
import React from 'react'
import { bemModule } from '@jahed/bem'
import styles from './Link.module.scss'

const bem = bemModule(styles)

export const Link = ({ active, type, children, ...props }) => (
  <a className={bem('Link', { active, type })} href={props.href}>
    {children}
  </a>
)
