import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
  </>
);

// const links = {
//   firstCol: [
//     { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//     { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//     { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//   ],
//   secondCol: [
//     { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//     { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//     { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//     { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//   ],
// };

const CustomFooter = () => <Footer Content={Content} />;

export default CustomFooter;
