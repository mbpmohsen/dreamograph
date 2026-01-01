import DreamographSection from '@/app/_components/DreamographSection';
import JoinSection from '@/app/_components/JoinSection';
import JournalSection from '@/app/_components/JournalSection';
import TrustedSection from '@/app/_components/TrustedSection';
import HeroSection from '@/app/about/_components/HeroSection';
import HowBeganSection from '@/app/about/_components/HowBeganSection';
import MissionVisionValuesSection from '@/app/about/_components/MissionVisionValuesSection';
import OurTeamSection from '@/app/about/_components/OurTeamSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <HowBeganSection />
            <OurTeamSection />
            <MissionVisionValuesSection />
            <DreamographSection />
            <TrustedSection />
            <JournalSection />
            <JoinSection />
        </>
    );
}
