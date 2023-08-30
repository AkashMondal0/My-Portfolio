import { FC } from 'react';
import "../style/background.css"

interface BackgroundProps { }
const Background: FC<BackgroundProps> = () => {
    return (
        <>
            <div className="container">
                <div className="blackhole">
                    <div className="blackhole-circle" />
                    <div className="blackhole-disc" />
                </div>
            </div>
        </>
    );
};

export default Background;