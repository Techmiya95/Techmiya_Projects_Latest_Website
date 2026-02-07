import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout
import Layout from './components/Layout';

// Loading Component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Main Pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const ProjectExpo = lazy(() => import('./pages/ProjectExpo'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Game = lazy(() => import('./pages/Game'));

// Software Projects
const PythonProjects = lazy(() => import('./pages/software/PythonProjects'));
const MachineLearningProjects = lazy(() => import('./pages/software/MachineLearningProjects'));
const AIProjects = lazy(() => import('./pages/software/AIProjects'));
const JavaProjects = lazy(() => import('./pages/software/JavaProjects'));
const AndroidProjects = lazy(() => import('./pages/software/AndroidProjects'));
const DataScienceProjects = lazy(() => import('./pages/software/DataScienceProjects'));
const DeepLearningProjects = lazy(() => import('./pages/software/DeepLearningProjects'));
const CloudComputingProjects = lazy(() => import('./pages/software/CloudComputingProjects'));
const NetworkProjects = lazy(() => import('./pages/software/NetworkProjects'));
const BlockchainProjects = lazy(() => import('./pages/software/BlockchainProjects'));
const LatestProjectIdeas = lazy(() => import('./pages/software/LatestProjectIdeas'));

// Electronic Projects
const IoTProjects = lazy(() => import('./pages/electronic/IoTProjects'));
const ArduinoProjects = lazy(() => import('./pages/electronic/ArduinoProjects'));
const RaspberryPiProjects = lazy(() => import('./pages/electronic/RaspberryPiProjects'));
const DroneProjects = lazy(() => import('./pages/electronic/DroneProjects'));
const SensorProjects = lazy(() => import('./pages/electronic/SensorProjects'));
const GSMProjects = lazy(() => import('./pages/electronic/GSMProjects'));
const WirelessProjects = lazy(() => import('./pages/electronic/WirelessProjects'));
const SolarProjects = lazy(() => import('./pages/electronic/SolarProjects'));
const GPSProjects = lazy(() => import('./pages/electronic/GPSProjects'));

// Domains
const EmbeddedSystems = lazy(() => import('./pages/domains/EmbeddedSystems'));
const PythonDataScience = lazy(() => import('./pages/domains/PythonDataScience'));
const AIAndML = lazy(() => import('./pages/domains/AIAndML'));

// Footer Pages
const FAQ = lazy(() => import('./pages/footer-pages/FAQ'));
const TermsConditions = lazy(() => import('./pages/footer-pages/TermsConditions'));
const PrivacyPolicy = lazy(() => import('./pages/footer-pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./pages/footer-pages/RefundPolicy'));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Main Pages */}
              <Route index element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="projectexpo" element={<ProjectExpo />} />
              <Route path="project/:projectId" element={<ProjectDetail />} />
              <Route path="game" element={<Game />} />

              {/* Software Projects */}
              <Route path="software-projects/python" element={<PythonProjects />} />
              <Route path="software-projects/machine-learning" element={<MachineLearningProjects />} />
              <Route path="software-projects/ai" element={<AIProjects />} />
              <Route path="software-projects/java" element={<JavaProjects />} />
              <Route path="software-projects/android" element={<AndroidProjects />} />
              <Route path="software-projects/data-science" element={<DataScienceProjects />} />
              <Route path="software-projects/deep-learning" element={<DeepLearningProjects />} />
              <Route path="software-projects/cloud-computing" element={<CloudComputingProjects />} />
              <Route path="software-projects/network" element={<NetworkProjects />} />
              <Route path="software-projects/blockchain" element={<BlockchainProjects />} />
              <Route path="software-projects/latest-ideas-2026" element={<LatestProjectIdeas />} />

              {/* Electronic Projects */}
              <Route path="electronic-projects/iot" element={<IoTProjects />} />
              <Route path="electronic-projects/arduino" element={<ArduinoProjects />} />
              <Route path="electronic-projects/raspberrypi" element={<RaspberryPiProjects />} />
              <Route path="electronic-projects/drones" element={<DroneProjects />} />
              <Route path="electronic-projects/sensor" element={<SensorProjects />} />
              <Route path="electronic-projects/gsm" element={<GSMProjects />} />
              <Route path="electronic-projects/wireless" element={<WirelessProjects />} />
              <Route path="electronic-projects/solar" element={<SolarProjects />} />
              <Route path="electronic-projects/gps" element={<GPSProjects />} />

              {/* Domains */}
              <Route path="domains/embedded-systems" element={<EmbeddedSystems />} />
              <Route path="domains/python-data-science" element={<PythonDataScience />} />
              <Route path="domains/ai-ml" element={<AIAndML />} />

              {/* Footer Pages */}
              <Route path="faq" element={<FAQ />} />
              <Route path="terms-conditions" element={<TermsConditions />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="refund-policy" element={<RefundPolicy />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
