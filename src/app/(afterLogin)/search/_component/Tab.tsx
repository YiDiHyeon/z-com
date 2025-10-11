"use client";
import style from './tab.module.css';
import {useContext, useState} from "react";
import {TabContext} from "@/app/(afterLogin)/home/_component/TabProvider";
import {useRouter, useSearchParams} from "next/navigation";

export default function Tab() {
    // const [tab, setTab] = useState('hot');
    const [current, setCurrent] = useState('hot')
    // const { tab, setTab } = useContext(TabContext);

    const router = useRouter()
    const searchParams = useSearchParams();
    const onClickHot = () => {
        setCurrent('hot');
        router.replace(`search?q=${searchParams.get('q')}`)
    }
    const onClickNew = () => {
        setCurrent('new');
        router.replace(`search?${searchParams.toString()}&f=live`)
    }

    return (
        <div className={style.homeFixed}>
            <div className={style.homeText}>홈</div>
            <div className={style.homeTab}>
                <div onClick={onClickHot}>
                    인기
                    <div className={style.tabIndicator} hidden={current === 'new'}></div>
                </div>
                <div onClick={onClickNew}>
                    최신
                    <div className={style.tabIndicator} hidden={current === 'hot'}></div>
                </div>
            </div>
        </div>
    )
}