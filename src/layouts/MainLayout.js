import React, {useEffect} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


const MainLayout = ({ children }) => {
    useEffect(() => {
        console.log('MainLayOut useEffect');
    }, []);
    return (
        <>
            <div>
                <header>
                    <h1>=== Header ===</h1>
                </header>
                <main>{children}</main>
                <footer>
                    <h1>=== footer ===</h1>
                </footer>
            </div>
        </>
    );
};

export default MainLayout;