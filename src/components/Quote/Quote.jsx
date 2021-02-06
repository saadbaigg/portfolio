import React from 'react'
import styles from './Quote.module.scss'

const Quote = ({ quote, author }) => {
    return (
        <div className={styles.container}>
            <p>"{quote}"</p>
            <p>-{author}</p>
        </div>
    )
}

export default Quote
