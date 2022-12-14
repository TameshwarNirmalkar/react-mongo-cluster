import './App.scss';
// import { Link, Outlet } from "react-router-dom";
import { HeaderComponent } from './components/header';
import { FooterComponent } from './components/footer';
import { Element } from 'react-scroll';
import HomeContainer from './container/Home';
import ServicesContainer from './container/Services';
import PricingContainer from './container/Pricing';
import TestimonialContainer from './container/Testimonial';
import ContactContainer from './container/Contact';
import { CallToAction } from './components/call-to-action/call-to-action';
import { ClientLogo } from './components/client-logo';
import { useEffect } from 'react';
import { updateIsScrollHeight } from './store/slices/userSlice';
import { getUserList } from './store/slices/userAction';
import { ReduxState, useTypedDispatch } from './store';
import { useSelector } from 'react-redux';

const App = (): JSX.Element => {
  const dispatch = useTypedDispatch();
  const { isLoading } = useSelector((state: ReduxState) => ({ ...state.user }));

  useEffect(() => {
    dispatch(getUserList());
    const handleScroll = (): void => {
      dispatch(updateIsScrollHeight(window.scrollY > 96));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <div>
      <HeaderComponent />
      <div className="content">
        <Element
          name="home"
          className="element">
          <HomeContainer />
        </Element>

        <Element
          name="services"
          className="element">
          <ServicesContainer />
        </Element>

        <Element
          name="pricing"
          className="element">
          <PricingContainer />
        </Element>

        <CallToAction />

        <Element
          name="testimonial"
          className="element">
          <TestimonialContainer />
        </Element>

        <ClientLogo />

        <Element
          name="contact"
          className="element">
          <ContactContainer />
        </Element>
      </div>
      <FooterComponent />
    </div>
  );
};

export default App;
