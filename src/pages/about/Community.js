import React, {useEffect} from 'react';

export default function Community () {
     useEffect(() => {
    document.title = 'CSR page - Atlas Tea Brokers';
  }, []);

    return (<div className="community">
        <h2>COMMUNITY<hr/></h2>
    </div>)
}