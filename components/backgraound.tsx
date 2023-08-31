import { FC } from 'react';
import "../style/background.css"

interface BackgroundProps { }
const Background: FC<BackgroundProps> = () => {
    return (
        <>
            <div className="container animate__animated animate__fadeIn my-element">
                <div className="blackhole">
                    <div className="blackhole-circle" />
                    <div className="blackhole-disc" />
                </div>
            </div>
        </>
    );
};

export default Background;