import { FC } from 'react';

interface BackgroundProps { }
const Background: FC<BackgroundProps> = () => {
    return (
       <div className="loader">
  <div className="blackhole">
    <div className="blackhole-circle" />
    <div className="blackhole-disc" />
  </div>
</div>

    );
};

export default Background;