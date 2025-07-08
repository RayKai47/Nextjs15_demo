export const metadata = {
  title: 'About Our Company',
  description: 'Our Company decided to build a bestfoodie app for our customers',
}

const AboutLayout = ({ children }) => {
  return (
    <div>
        <h1>About Layout</h1>
        {children}
    </div>
  )
}

export default AboutLayout;