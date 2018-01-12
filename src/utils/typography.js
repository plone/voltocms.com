import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Poppins',
      styles: ['300', '400', '500', '700', '400italic', '700italic'],
    },
  ],
  headerFontFamily: [
    'Poppins',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Poppins',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    twitterwidget: {
      margin: '3em auto',
    },
  }),
});

// Output CSS as string.
typography.toString();

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
