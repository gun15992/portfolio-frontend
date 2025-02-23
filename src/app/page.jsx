// Import Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Layouts/Footer';
import AboutMeSection from './components/Sections/AboutMeSection';
import ContactSection from './components/Sections/ContactSection';
import ProfileSection from './components/Sections/ProfileSection';
import ToolsIUseSection from './components/Sections/ToolsIUseSection';
import MyProjectsSection from './components/Sections/MyProjectsSection';
import AchievmentsSection from './components/Sections/AchievmentsSection';
import MyCertificationsSection from './components/Sections/MyCertificationsSection';

function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <div className="container mt-24 mx-auto px-12 py-4">
                <ProfileSection />
                <AchievmentsSection />
                <AboutMeSection />
                <ToolsIUseSection />
                <MyProjectsSection />
                <MyCertificationsSection />
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}

export default Home;