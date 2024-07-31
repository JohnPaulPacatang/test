// import fonts from /public/static/fonts folder

const font = `
  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: url('/static/fonts/inter-v12-latin-300.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/inter-v12-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/inter-v12-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/inter-v12-latin-300.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/inter-v12-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/inter-v12-latin-300.svg#Inter') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/inter-v12-latin-regular.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/inter-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/inter-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/inter-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/inter-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/inter-v12-latin-regular.svg#Inter') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url('/static/fonts/inter-v12-latin-500.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/inter-v12-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/inter-v12-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/inter-v12-latin-500.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/inter-v12-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/inter-v12-latin-500.svg#Inter') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    src: url('/static/fonts/inter-v12-latin-600.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/inter-v12-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/inter-v12-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/inter-v12-latin-600.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/inter-v12-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/inter-v12-latin-600.svg#Inter') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url('/static/fonts/inter-v12-latin-700.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/inter-v12-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/inter-v12-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/inter-v12-latin-700.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/inter-v12-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/inter-v12-latin-700.svg#Inter') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    src: url('/static/fonts/inter-v12-latin-800.eot'); /* IE9 Compat Modes */
    src: url('/static/fonts/inter-v12-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('/static/fonts/inter-v12-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
        url('/static/fonts/inter-v12-latin-800.woff') format('woff'), /* Modern Browsers */
        url('/static/fonts/inter-v12-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
        url('/static/fonts/inter-v12-latin-800.svg#Inter') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-display: swap;
    font-family: 'Saira Semi Condensed';
    font-style: normal;
    font-weight: 600;
    src: url('../static/fonts/saira-semi-condensed-v11-latin-600.eot'); /* IE9 Compat Modes */
    src: url('../static/fonts/saira-semi-condensed-v11-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/fonts/saira-semi-condensed-v11-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('../static/fonts/saira-semi-condensed-v11-latin-600.woff') format('woff'), /* Modern Browsers */
        url('../static/fonts/saira-semi-condensed-v11-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../static/fonts/saira-semi-condensed-v11-latin-600.svg#SairaSemiCondensed') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-display: swap;
    font-family: 'Saira Semi Condensed';
    font-style: normal;
    font-weight: 700;
    src: url('../static/fonts/saira-semi-condensed-v11-latin-700.eot'); /* IE9 Compat Modes */
    src: url('../static/fonts/saira-semi-condensed-v11-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../static/fonts/saira-semi-condensed-v11-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
        url('../static/fonts/saira-semi-condensed-v11-latin-700.woff') format('woff'), /* Modern Browsers */
        url('../static/fonts/saira-semi-condensed-v11-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../static/fonts/saira-semi-condensed-v11-latin-700.svg#SairaSemiCondensed') format('svg'); /* Legacy iOS */
  }
`;

export default font
