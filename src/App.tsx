import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ProjectIndex from './pages/Projects/ProjectIndex'
import ProjectShow from './pages/Projects/ProjectShow'
import Header from './components/layout/Header'
import Body from './components/layout/Body'
import Footer from './components/layout/Footer'

const App = () => (
  <BrowserRouter>
    <Header />
    <Body>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectIndex />} />
        <Route path="/projects/:name" element={<ProjectShow />} />
      </Routes>
    </Body>
    <Footer />
  </BrowserRouter>
)

export default App
