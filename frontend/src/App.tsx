import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Topics from './pages/Topics'
import TopicPath from './pages/TopicPath'
import AddResource from './pages/AddResource'
import HelpWanted from './pages/HelpWanted'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="topics" element={<Topics />} />
          <Route path="topics/:topicSlug" element={<TopicPath />} />
          <Route path="topics/:topicSlug/:subTopicSlug" element={<TopicPath />} />
          <Route path="add-resource" element={<AddResource />} />
          <Route path="help-wanted" element={<HelpWanted />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:username" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
