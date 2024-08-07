import React, {useEffect, useState} from 'react';
import useRouter from '../../utils/router';
import BaseButton from '../../components/base/baseButton';

const BaseExample = () => {
    const routerCore = useRouter();
    const text = routerCore.getRouterParams();

    console.log(text);

   const buttonClick = (e) => {
        console.log(' 버튼 클릭');
    };

    return (
        <>
            <div>
                <BaseButton
                    title="버튼"
                    onClick={buttonClick}
                />
            </div>
            <div>
                <BaseButton
                    title='disable 버튼'
                    isDisabled
                />
            </div>
        </>
    );
}

export default BaseExample;