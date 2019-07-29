import React, { Fragment } from 'react';
import GeneralHeader from '../../components/GeneralHeader/GeneralHeader';
import { InfoDisplay } from '../../components/InfoDisplay/InfoDisplay';
import SideNav from '../../components/SideNav/SideNav';
import Footer from '../../components/Footer/Footer';


const UserDashBoardPage = () => (
    <Fragment>
        <div>
          <GeneralHeader />
          <main className="site-main row">
          <SideNav />
          <InfoDisplay />
          </main>
          <Footer />
        </div>
  </Fragment>
);

export default UserDashBoardPage;