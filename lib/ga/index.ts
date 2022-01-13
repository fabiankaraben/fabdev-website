// Info source:
// https://mariestarck.com/add-google-analytics-to-your-next-js-application-in-5-easy-steps/
// https://dev.to/asross311/strongly-typed-google-analytics-v4-with-nextjs-4g13

// log the pageview with their URL
export const pageview = (url: URL) => {
    window.gtag('config', 'UA-215112498-1', {
      page_path: url,
    })
  }
  
  // log specific events happening.
//   export const event = ({ action, params }) => {
//     window.gtag('event', action, params)
//   }