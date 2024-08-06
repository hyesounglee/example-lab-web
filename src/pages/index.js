import React, {useEffect, useState} from 'react';
import useRouter from '../utils/router';

// localhost:3000 으로 접근하면 루트(/) 페이지 경로가 해당 index.js로 잡힌다.
const Home = () => {
    const [buttonState, setButtonState] = useState(false);
    const [buttonText, setButtonText] = useState('버튼클릭 전');
    const [buttonCount, setButtonCount] = useState(0);
    const routerCore = useRouter();

    function changeButton() {
        if(buttonState === false) {
            setButtonState(true);
        }else {
            setButtonState(false);
        }

        setButtonCount((prev) => (buttonCount + 1));
        setButtonText('버튼클릭 후');
    }; 

    function changePage() {
        routerCore.goPage('/example/test01', {text: 'index에서 왔습니다.'});
    }

    useEffect(() => {
        console.log('무조건 실행됨');
    }, []);

    useEffect(() => {
        console.log(buttonState);
    }, [buttonState]);

    return (
        <>
            <div>
                useEffect
                <button onClick={changeButton}>{buttonText} : {buttonCount}</button>
            </div>
            <div>
                화면 이동
                <button onClick={changePage}>클릭</button>
            </div>
        </>
    );
}

export default Home;