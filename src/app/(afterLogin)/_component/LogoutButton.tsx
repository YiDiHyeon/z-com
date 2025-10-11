"use client"

import style from "./logoutButton.module.css";

export default function LogoutButton() {
    const me =  {
        id: 'test',
        nickname: '디횬',
        image: '/easy.png'
    }

    const onLogout = () => {};

    return (
        <button className={style.logOutButton} onClick={onLogout}>
            <div className={style.logOutUserImage}>
                <img src={me.image} alt={me.nickname}/>
            </div>
            <div className={style.logOutUserName}>
                <div>{me.nickname}</div>
                <div>@{me.id}</div>
            </div>
        </button>
    )
}