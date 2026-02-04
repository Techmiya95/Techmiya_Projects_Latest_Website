import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './components/Layout';

// Main Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ProjectExpo from './pages/ProjectExpo';
import ProjectDetail from './pages/ProjectDetail';
import Game from './pages/Game';

// Software Projects
import PythonProjects from './pages/software/PythonProjects';
import MachineLearningProjects from './pages/software/MachineLearningProjects';
import AIProjects from './pages/software/AIProjects';
import JavaProjects from './pages/software/JavaProjects';
import AndroidProjects from './pages/software/AndroidProjects';
import DataScienceProjects from './pages/software/DataScienceProjects';
import DeepLearningProjects from './pages/software/DeepLearningProjects';
import CloudComputingProjects from './pages/software/CloudComputingProjects';
import NetworkProjects from './pages/software/NetworkProjects';
import BlockchainProjects from './pages/software/BlockchainProjects';
import LatestProjectIdeas from './pages/software/LatestProjectIdeas';

// Electronic Projects
import IoTProjects from './pages/electronic/IoTProjects';
import ArduinoProjects from './pages/electronic/ArduinoProjects';
import RaspberryPiProjects from './pages/electronic/RaspberryPiProjects';
import DroneProjects from './pages/electronic/DroneProjects';
import SensorProjects from './pages/electronic/SensorProjects';
import GSMProjects from './pages/electronic/GSMProjects';
import WirelessProjects from './pages/electronic/WirelessProjects';
import SolarProjects from './pages/electronic/SolarProjects';
import GPSProjects from './pages/electronic/GPSProjects';

// Domains
import EmbeddedSystems from './pages/domains/EmbeddedSystems';
import PythonDataScience from './pages/domains/PythonDataScience';
import AIAndML from './pages/domains/AIAndML';

// Footer Pages
import FAQ from './pages/footer-pages/FAQ';
import TermsConditions from './pages/footer-pages/TermsConditions';
import PrivacyPolicy from './pages/footer-pages/PrivacyPolicy';
import RefundPolicy from './pages/footer-pages/RefundPolicy';

function App() {
  return (
    <BrowserRouter>
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
          <Route path="software-projects/latest-ideas-2025" element={<LatestProjectIdeas />} />

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
    </BrowserRouter>
  );
}

export default App;
