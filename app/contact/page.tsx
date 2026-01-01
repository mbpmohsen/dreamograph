import JoinSection from '@/app/_components/JoinSection';
import ContactSection from '@/app/contact/_components/ContactSection';
import FAQSection from '@/app/contact/_components/FAQSection';

export default function Home() {
    return (
        <>
            <ContactSection />
            <FAQSection />
            <JoinSection />
        </>
    );
}
