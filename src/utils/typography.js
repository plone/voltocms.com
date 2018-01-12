import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    twitterwidget: {
      margin: '3em auto'
    }
  })
})

// Output CSS as string.
typography.toString()

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
