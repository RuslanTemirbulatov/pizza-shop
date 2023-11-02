import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizza = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="1" y="266" rx="11" ry="11" width="280" height="27" /> 
    <rect x="3" y="312" rx="14" ry="14" width="280" height="88" /> 
    <rect x="9" y="426" rx="10" ry="10" width="90" height="27" /> 
    <rect x="129" y="421" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default SkeletonPizza