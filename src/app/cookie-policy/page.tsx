import type { Metadata } from 'next';
import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata: Metadata = {
    title: 'Cookie Policy | Braintrust',
    description: 'Braintrust Cookie Policy — how we use cookies on our website and your choices regarding cookie settings.',
};

export default function CookiePolicy() {
    return (
        <LegalPageLayout title="Cookie Policy" lastUpdated="March 19, 2019">
            <p>THIS POLICY DESCRIBES HOW FREELANCE LABS USES COOKIES ON HTTP://WWW.USEBRAINTRUST.COM (THE &quot;SITE&quot;). WE RECOMMEND THAT YOU ALSO CONSULT OUR <a href="/privacy-policy">PRIVACY POLICY</a> FOR ADDITIONAL INFORMATION ON HOW WE COLLECT AND USE INFORMATION COLLECTED FROM VISITORS TO THE SITE. YOUR CONTINUED USE OF THE SITE AFTER THAT WILL SIGNIFY YOUR ACCEPTANCE OF THIS POLICY. WE MAY MODIFY THIS AGREEMENT WITHOUT NOTIFYING YOU, SO PLEASE CHECK BACK OFTEN FOR UPDATES.</p>
            <p>By using the Site, you agree that we can use the cookies described in this Cookie Policy. You can stop cookies by changing the settings in your browser (more information on how to do this is provided below).</p>

            <h2>1. What Are Cookies?</h2>
            <p>Cookies are text files, containing small amounts of information, which are downloaded to your browsing device (such as a computer or smartphone) when you visit a website. Cookies can be recognized by the website that downloaded them — or other websites that use the same cookies. This helps websites know if the browsing device has visited them before.</p>

            <h2>2. What Are Cookies Used For?</h2>
            <p>Cookies do lots of different jobs, like helping us understand how the Site is being used, letting you navigate between pages efficiently, remembering your preferences, and generally improving your browsing experience. Cookies can also help ensure marketing you see online is more relevant to you and your interests.</p>

            <h2>3. What Types of Cookies Does Freelance Labs Use?</h2>
            <p>The type of cookies used on most websites can generally be put into one of six categories: Strictly Necessary, Performance, Functionality, Flash, Tailored Content and Targeting. In order to provide you with the best browsing experience, Freelance Labs uses all of these categories on the Site. You can find out more about each cookie category in the sections below.</p>
            <p>For cookies not necessary for the performance of the Site and Site Services, our collection is subject to your consent as provided through the acceptance of our Privacy Policy and cookie consent opt-in available on the Site.</p>

            <h2>4. Strictly Necessary Cookies</h2>
            <p>These cookies are essential, as they enable you to move around the Site and use its features, such as accessing secure areas. Without these cookies, some services you have asked for such as payment submission can&apos;t be provided.</p>

            <h2>5. Performance Cookies</h2>
            <p>These cookies collect information about how you use the Site, for example which pages you go to most often and if you get error messages from certain pages. These cookies don&apos;t gather information that identifies you. All information these cookies collect is anonymous and is only used to improve how the Site works.</p>

            <h2>6. Functionality Cookies</h2>
            <p>These cookies allow the Site to remember choices you make (such as your user name, language or the region you&apos;re in). For instance, the Site uses functionality cookies to remember your language preference. These cookies can also be used to remember changes you&apos;ve made to text size, font, and other parts of pages that you can customize. They may also be used to provide services you&apos;ve asked for such as watching a video or commenting on a blog. The information these cookies collect may be anonymous and they cannot track your browsing activity on other websites.</p>

            <h2>7. Vimeo Cookies</h2>
            <p>We may, in certain circumstances, use Vimeo to deliver special content, such as video clips or animation. To improve your user experience, cookies are employed to provide functions such as remembering your settings and preferences. Cookie preferences can be managed in accordance with the <a href="https://vimeo.com/cookie_policy" target="_blank" rel="noopener noreferrer">Vimeo Cookie Policy</a>.</p>

            <h2>8. Tailored Content Cookies</h2>
            <p>Tailored content cookies help the Site provide enhanced features and display content in a way that is relevant to you. These cookies help the Site determine what information to show you based on how you have used the Site previously. These cookies do not track your browsing activity on other websites.</p>

            <h2>9. Targeting Cookies</h2>
            <p>These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of an advertising campaign. They remember that you have visited a website and this information may be shared with other organizations such as advertisers. This means after you have been to the Site you may see some advertisements about our services elsewhere on the Internet.</p>

            <h2>10. How Long Will Cookies Stay on My Browsing Device?</h2>
            <p>The length of time a cookie will stay on your browsing device depends on whether it is a &quot;persistent&quot; or &quot;session&quot; cookie. Session cookies will only stay on your device until you stop browsing. Persistent cookies stay on your browsing device until they expire or are deleted.</p>

            <h2>11. First and Third Party Cookies</h2>
            <p>First party cookies are cookies that belong to us, while third party cookies are cookies that another party places on your browsing device through our Site. For example, Facebook will place a cookie on your browsing device if you click on the Facebook link when browsing the Site.</p>

            <h2>12. How to Control and Delete Cookies Through Your Browser</h2>
            <p>The browser you are using to view the Site can enable, disable, or delete cookies. To do this, follow the instructions provided by your browser (usually located within the &quot;Help,&quot; &quot;Tools&quot; or &quot;Edit&quot; facility). Please note that if you set your browser to disable cookies, you may not be able to access certain parts of the Site, for example, applying for a job or posting a job. Other parts of the Site may also not work properly. You can find out more information about how to change your browser cookie settings at <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>

            <h2>13. Contacting Us</h2>
            <p>If you have any questions about this Cookie Policy, please contact us at <a href="mailto:legal@usebraintrust.com">legal@usebraintrust.com</a> or by mail addressed to Attn: Legal, PO BOX 471234 San Francisco, CA 94147.</p>
        </LegalPageLayout>
    );
}
