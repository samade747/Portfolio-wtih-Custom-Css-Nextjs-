import React from 'react';
import styles from '../app/components/styles/ResumeBuilder.module.css';
import Profile from "./components/ResumeBuilder/Profile";
import ContactInfo from "./components/ResumeBuilder/ContactInfo";
import Education from "./components/ResumeBuilder/Education";
import Skills from "./components/ResumeBuilder/Skills";
import WorkExperience from "./components/ResumeBuilder/WorkExperience";
import References from "./components/ResumeBuilder/References";

export default function Home() {
  return (
    <div className={styles.container}>
  <div className={styles.header}>
  <h1>SAMAD</h1>
  <h3>Web Developer</h3>
  </div>
  <div className={styles.sectionContainer}>
    <Profile />
    <ContactInfo />
    <Education />
    <Skills />
    <WorkExperience />
    <References />
  </div>
</div>
  );
}
