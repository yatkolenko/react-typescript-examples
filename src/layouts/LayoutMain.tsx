import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import BaseFooter from '@components/base/BaseFooter.tsx';
import BaseHeader from '@components/base/BaseHeader.tsx';

const Layout = () => (
  <div className="app flex min-h-screen flex-col justify-between">
    <BaseHeader />
    <main className="content flex-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </main>
    <BaseFooter />
  </div>
);

export default Layout;
