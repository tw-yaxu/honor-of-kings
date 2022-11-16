import React, {useState} from 'react';
import './Input.scss';

export default function KeyInput() {
    const [keyWords, setKeyWords] = useState("");
    const [heroes, setHeroes] = useState(null);

    const onTextInput = (event) => {
        setKeyWords(event.target.value);
    }

    const handleClick = () => {
        console.log('key words 👉️', keyWords);
        fetch('http://47.108.154.180:8034/?code=asd', {mode: 'no-cors'}).finally(res => {
            setHeroes(res?.data || "抽取成功！ \\1F60A")
        })
    }

    return (
        <div className="input-container">
            <input className="c-checkbox" type="checkbox" id="checkbox"/>
            <div className="c-formContainer">
                <form className="c-form" action="">
                    <input className="c-form__input" placeholder="请输入密钥" type="text" onChange={onTextInput}
                           required/>
                    <label className="c-form__buttonLabel">
                        <button className="c-form__button" type="button" onClick={handleClick}>生成英雄</button>
                    </label>
                    <label className="c-form__toggle" htmlFor="checkbox" data-title="点击开始抽取英雄组合"/>
                </form>
            </div>
            {heroes && (
                <div className="hint-container">
                    <div className="backdrop"></div>
                    <p>{heroes}</p>
                </div>
            )}
        </div>
    );
}
