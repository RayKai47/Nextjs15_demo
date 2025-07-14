export const metadata = {
  title: 'GC Backstage Login',
  description: 'Please login to the Backstage to manage the website',
}

const LoginLayout = ({ children }) => {
  return (
    <div className="bg-sky-400">
      {children}
    </div>
  )
}

export default LoginLayout