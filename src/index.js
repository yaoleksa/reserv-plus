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

function Head() {
    return (
        <div className='head'>
            <ReservPlus />
            <ScanDocument />
        </div>
    );
}

function Page() {
    return (<>
        <Head />
    </>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />);