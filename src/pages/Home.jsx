import React from 'react'
import HeroSection from '../sections/HeroSection';
import Navbar from '../components/Navbar';
import RecentProjects from '../sections/RecentProjects';
import Testimonials from "../sections/Testimonials";
import GoalSection from '../sections/GoalSection';
import Footer from '../components/Footer'
import Packages from '../sections/Packages';
import TermAndCondition from './TermAndCondition';
import WorkFlow from '../sections/WorkFlow';
import WhyDifferent from '../sections/WhyDifferent';
import ContactUs from '../sections/ContactUs';
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <RecentProjects />
      <Testimonials />
      <GoalSection />
      <WorkFlow />
      <WhyDifferent />
      <Packages />
      <ContactUs />
      <Footer />
    </div>
  );
}

