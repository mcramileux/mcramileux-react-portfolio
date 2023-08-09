import React from 'react';

function Project({project}) {
    const {title, description, image, deployedSite, github} = project;

    return (
      <div key={title} className='col-lg-8 col-xl-6 text-center mb-4'>
        <div className='card h-100 border border-dark border-2'>
          <img src={image} className='card-img-top' alt={title} />
            <div className='card-body'>
              <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
            </div>
            <div className='card-footer text-center'>
            <a href={github} target='_blank' rel='noreferrer'>
            <button type='button' class='btn btn-info'>Github Repo</button>
            </a>
          </div>
          <div>
          <div className='card-footer text-center'>
            <a href={deployedSite} target='_blank' rel='noreferrer'>
            <button type='button' class='btn btn-info'>Deployed Site</button>
            </a>
          </div>
        </div>
      </div>
      </div>
    );
  }
  export default Project;