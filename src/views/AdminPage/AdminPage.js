import React, { Fragment } from 'react';
import GeneralHeader from '../../components/GeneralHeader/GeneralHeader';
import AdminInfoDisplay from '../../components/AdminInfoDisplay/AdminInfoDisplay';
import SideNav from '../../components/SideNav/SideNav';
import Footer from '../../components/Footer/Footer';
import './AdminPage.css';

const AdminPage = () => (
  <Fragment>
    <div>
      <GeneralHeader />
      <main className="site-main row">
      <SideNav />
      <AdminInfoDisplay />
      </main>
      <Footer />
    </div>
  </Fragment>
);

export default AdminPage;
