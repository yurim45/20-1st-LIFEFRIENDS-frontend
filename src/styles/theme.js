const size = {
  mobile: '600px',
  tablet: '900px',
  laptop: '1500px',
  desktop: '1800px',
};

const theme = {
  // mainBlue: '#00c7f5',
  // backgroundGrey: '#f5f5f5',
  // backgroundNavy: '#1f2d4d',
  // border color
  borderLine: '#ededed',
  inputGray: '#dbdbdb',
  // font color
  fontMainBlack: '#424242',
  fontNavBlack: '#474747',
  fontSubNavBlack: '#424242',
  fontFilterGray: '#757575',
  fontGray: '#757575',
  placeholderGrey: '#bdbdbd',
  fontLightBlue: '#8faad0',
  fontWhite: '#ffffff',

  // 반응형
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

export default theme;
