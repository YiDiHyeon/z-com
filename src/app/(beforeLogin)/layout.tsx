import React, {ReactNode} from "react";
import {inspect} from "util";
import styles from '@/app/page.module.css'

type Props =  {children : ReactNode, modal : ReactNode}
export default function Layout({children, modal} : Props) {
    return (
        <div className={styles.container}>
            before Login Layout
            {children}
            {modal}
        </div>
    )
}