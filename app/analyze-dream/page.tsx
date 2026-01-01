import CoreFeatures from '@/app/_components/CoreFeatures';
import DreamographSection from '@/app/_components/DreamographSection';
import JoinSection from '@/app/_components/JoinSection';
import JournalSection from '@/app/_components/JournalSection';
import TrustedSection from '@/app/_components/TrustedSection';
import DescribeSection from '@/app/analyze-dream/_components/DescribeSection';

export default function Home() {
    return (
        <>
            <DescribeSection />
            <CoreFeatures />
            <DreamographSection />
            <TrustedSection />
            <JournalSection />
            <JoinSection />
        </>
    );
}
