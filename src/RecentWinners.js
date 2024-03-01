import React from 'react'
import './Styles/RecentWinners.css'

function RecentWinners() {
    const blocks = Array.from({ length: 10 }, (_, index) => index + 1);


    return (
        <div className='dfc'>
            <div className="rounded-blocks-container">
                <div className="rounded-blocks-wrapper">
                    {blocks.map((block) => (
                        <div key={block} className="rounded-block">{block}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentWinners