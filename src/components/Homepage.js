import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './home.png';

const FirstLeftText = () => <p>About</p>;

const FirstRightText = () => (
  <p>
    IBM Family Science is a hands-on science program offered by IBM Research to inspire 4th and 5th grade students to learn about science.
  </p>
);

// const SecondLeftText = () => <p>Callout component</p>;

// const SecondRightText = () => (
//   <p>
//     You can also not use these components at all by not providing the callout
//     props to the template or writing your own template.
//     <a
//       className={calloutLink}
//       href="https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/templates/Homepage.js">
//       Homepage source →
//     </a>
//   </p>
// );

const BannerText = () => <h1>IBM Family Science</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#ffffff"
      color="black"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  // SecondCallout: (
  //   <HomepageCallout
  //     leftText={SecondLeftText}
  //     rightText={SecondRightText}
  //     color="white"
  //     backgroundColor="#061f80"
  //   />
  // ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
