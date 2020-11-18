import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Paginator.module.css'
import { PAGE_SIZE } from '../../utils/constants'

function Paginator({ count }) {
  const { pathname, search } = useLocation()
  const params = new URLSearchParams(search)
  const page = params.get('page')
  const currentPage = page && parseInt(page)
  const pages = new Array(Math.ceil(count / PAGE_SIZE)).fill(undefined)
  return (
    <div className={styles.container}>
      {pages.map((_, index) => {
        const p = index + 1
        const active = currentPage === p
        return (
          <Link
            key={`page-link-${p}`}
            className={active ? styles.activeLink : styles.link}
            to={`${pathname}?page=${p}`}
          >
            {index + 1}
          </Link>
        )
      })}
    </div>
  )
}

export default Paginator
