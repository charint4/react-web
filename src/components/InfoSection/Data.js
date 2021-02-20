import image1 from '../../images/svg1.svg'
import image2 from '../../images/svg2.svg'
import image3 from '../../images/svg3.svg'
// import image4 from '../../images/svg4.svg'
// import image5 from '../../images/svg5.svg'
// import image6 from '../../images/svg6.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headline: 'Login to your account at any time',
  description: 'Get access to our exclusice app that allows you to send unlimited transcation without getting charged any fees',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: image1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Unlimited Transaction with zero fees',
  description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: image2,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: image3,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true
};