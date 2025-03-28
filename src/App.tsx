import PageLogin from '@/pages/auth/PageLogin';
import PageRegistration from '@/pages/auth/PageRegistration';
import PageTodo from '@/pages/PageTodo';
import PageHome from '@/pages/PageHome';
import PageAbout from '@/pages/PageAbout';
import Layout from '@/layouts/LayoutMain';

import { Paths } from '@/routes/path';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<Layout />}>
          <Route index element={<PageHome />} />
          <Route path={Paths.LOGIN} element={<PageLogin />} />
          <Route path={Paths.REGISTER} element={<PageRegistration />} />

          <Route path={Paths.TODOS} element={<PageTodo />} />
          <Route path={Paths.ABOUT} element={<PageAbout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
