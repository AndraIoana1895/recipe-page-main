import React from 'react'
import styles from "./Title.module.css";

type TitleProps = {
    title: string;
}

const Title = ({ title }: TitleProps) => {
    return (
        <div>
            <h2 className={styles.heading}>{title}</h2>
        </div>
    )
}
export default Title;
