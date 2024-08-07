import React, {useEffect} from "react";
import Button from '@mui/material/Button';

/**
 * 버튼 컴포넌트
 * 
 * title(String) : 버튼명
 * isDisabled(Boolean) : 버튼 비활성화
 * onClick(function) : 클릭 함수
 */
export default function BaseButton(props) {
    useEffect(() => {
        console.log('props : ', props);
    }, []);
    
    const handleClick = (e) => {
        props.onClick(e);
    }

    return (
        <>
        <Button
            variant="contained"
            onClick={handleClick}
            disabled={props.isDisabled}
        >
            {props.title}
        </Button>
        </>
    );
}