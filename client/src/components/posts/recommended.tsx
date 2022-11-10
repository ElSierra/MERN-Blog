import React from 'react';
import RecomendedArticle from './recommended-article';

export default function Recomended(){
    return(  <div className="special-section global-padding">
    <div className="special-subtitle global-subtitle">
      <small className="global-subtitle-title">
        <span>Recommended</span>
      </small>
    </div>
    <div className="special-wrap">
     <RecomendedArticle/>

    </div>
  </div>);
}