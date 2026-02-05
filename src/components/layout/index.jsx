import Header from "./Header/index.jsx";
import Footer from "./Footer/index.jsx";
import { Outlet } from 'react-router';

const index = () => {
  return (
    <>
      <Header />
      <main>
       <Outlet/>
      </main>
      <Footer />
    </>
  )
}

export default index