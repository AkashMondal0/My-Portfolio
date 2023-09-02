import { FC } from 'react';
import "../style/background.css"

const Background: FC = () => {
    return (
        <>
            <div className="container animate__animated animate__fadeIn" style={{
                animationDuration: "3s",
            }}>
                <div className="blackhole">
                    <div className="blackhole-circle" />
                    <div className="blackhole-disc" />
                </div>
            </div>
        </>
    );
};

export default Background;