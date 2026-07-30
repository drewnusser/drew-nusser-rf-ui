import './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Guide from './components/Pages/Guide/Guide'
import Attendees from './components/Pages/Attendees/Attendees'
import Content from './components/Pages/Content/Content'
import Exhibitors from './components/Pages/Exhibitors/Exhibitors'
import Attendees2 from './components/Pages/Attendees/Attendees/Attendees'
import AttendeeTypes from './components/Pages/Attendees/AttendeeTypes/AttendeeTypes'
import Packages from './components/Pages/Attendees/Packages/Packages'
import RegCodes from './components/Pages/Attendees/RegCodes/RegCodes'
import Discounts from './components/Pages/Attendees/Discounts/Discounts'


function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Body>
        <Header />
        <main className="body-content">
          <Routes>
            <Route path="/Guide" element={<Guide />} />
            <Route path="/Attendees" element={<Attendees />} />
            <Route path="/Content" element={<Content />} />
            <Route path="/Exhibitors" element={<Exhibitors />} />
            <Route path="/Attendees/Attendees" element={<Attendees2 />} />
            <Route path="/Attendees/AttendeeTypes" element={<AttendeeTypes />} />
            <Route path="/Attendees/Packages" element={<Packages />} />
            <Route path="/Attendees/RegCodes" element={<RegCodes />} />
            <Route path="/Attendees/Discounts" element={<Discounts />} />
          </Routes>
        </main>
      </Body>
    </BrowserRouter>
  )
}

export default App
