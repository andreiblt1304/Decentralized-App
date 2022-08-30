import { Archive, Footer, Loader, Navbar, Transactions, Welcome } from "./Components"

const App = () => {
  return (
    <div className="min-h-screen">
       <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
       </div>
       <Transactions />
       <Archive />
       <Footer />
    </div>
  )
}

export default App
