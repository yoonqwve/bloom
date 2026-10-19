import { Subscribe } from "./components/Subscribe/Subscribe"
import { Banner } from "./components/Banner/Banner"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"

export function App() {
  return (
    <div className="layout">
      <Header />

      <Banner />

      <Subscribe />

      <Footer />
    </div>
  )
}
