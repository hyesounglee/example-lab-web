import React, {useEffect, useState} from 'react';
import useRouter from '../../utils/router';

const Test01 = () => {
    const routerCore = useRouter();
    const text = routerCore.getRouterParams();

    console.log(text);

    return (
        <div>
           Test01
        </div>
    );
}

export default Test01;