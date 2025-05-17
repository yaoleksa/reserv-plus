import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function ReservPlus() {
    return (
        <div className='reserv-plus'>
            <p className='reserv'>Резерв</p><p className='plus'>+</p>
        </div>
    );
}

function ScanDocument() {
    return (<div className='scan-document'>
        <p>Сканувати</p>
        <p>документ</p>
    </div>);
}

function QRcode() {
    return (
        <svg className='qr' width="26" height="22" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            
            <line x1="10" y1="10" x2="30" y2="10" stroke="black" strokeWidth="4.5" />
            <line x1="10" y1="10" x2="10" y2="30" stroke="black" strokeWidth="4.5" />

            
            <line x1="90" y1="10" x2="110" y2="10" stroke="black" strokeWidth="4.5" />
            <line x1="110" y1="10" x2="110" y2="30" stroke="black" strokeWidth="4.5" />

            
            <line x1="10" y1="90" x2="10" y2="110" stroke="black" strokeWidth="4.5" />
            <line x1="10" y1="110" x2="30" y2="110" stroke="black" strokeWidth="4.5" />

            
            <line x1="110" y1="90" x2="110" y2="110" stroke="black" strokeWidth="4.5" />
            <line x1="90" y1="110" x2="110" y2="110" stroke="black" strokeWidth="4.5" />

            
            <text x="60" y="73" fontSize="44" fontFamily="sans-serif" textAnchor="middle" fill="black">
                QR
            </text>
        </svg>
    );
}

function ScanDocumentQR() {
    return (<div className='scan-document-qr'>
        <ScanDocument />
        <QRcode />
    </div>);
}

function Head() {
    return (
        <div className='head'>
            <ReservPlus />
            <ScanDocumentQR />
        </div>
    );
}

function MainDocument() {
    return (<div className='main-document'>
        <p className='main-document-name'>Військово-обліковий документ</p>
        <img src="./imgs/sign.png" />
    </div>);
}

function Page() {
    return (<>
        <Head />
        <MainDocument />
    </>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />);