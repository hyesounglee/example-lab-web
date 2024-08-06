import { useRouter } from 'next/router';
import { useCallback } from 'react';

const routerCore = () => {
    const router = useRouter();

    // 페이지 이동
    const goPage = useCallback((url, params) => {
        router.push({
            pathname: url,
            query: params
        });
    }, [router]);

    // 페이지 이동 시, 넘겨준 파라미터 조회
    const getRouterParams = useCallback(() => {
        return router.query;
    }, [router]);

    return {
        goPage,
        getRouterParams
    };
};

export default routerCore;