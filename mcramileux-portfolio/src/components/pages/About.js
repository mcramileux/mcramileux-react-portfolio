// TO EDIT
// About Me title and section are selected by default

//WHEN I am presented with the About Me section
//THEN I see a recent photo or avatar of the developer and a short bio about them

import React from 'react';
import '../../css/about.css';
import authorAvatar from '../../assets/images/pfp.jpeg';

export default function About() {
  return (
    <div className="container-about">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="flex-container">
            <img src={authorAvatar} alt="Author Avatar" className="avatar" />
              <h1>About Me</h1>
              <p>
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
