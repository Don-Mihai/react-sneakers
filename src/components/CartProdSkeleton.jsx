import React from 'react';
import ContentLoader from 'react-loading-skeleton';

const MyLoader = (props) => (
  <ContentLoader
    className="product"
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="30" y="36" rx="0" ry="0" width="150" height="91" />
    <rect x="31" y="143" rx="0" ry="0" width="149" height="20" />
    <rect x="33" y="177" rx="0" ry="0" width="86" height="18" />
    <rect x="34" y="224" rx="0" ry="0" width="80" height="19" />
    <rect x="141" y="217" rx="0" ry="0" width="36" height="33" />
  </ContentLoader>
);

export default MyLoader;
