import React from "react";
import { Link } from "react-router-dom";

import CalcModal from '../Components/CalcModal';
import SignIn from '../Components/SignUp';
 
function About() {
    return (
        <>
            <nav className="main-nav">
                <h1>About</h1>
                <div className='menu-link mobile-menu-link'>
                    <ul className='ul'>
                        <li><Link to='/home' className='a' href='#'>Home</Link></li>
                        
                        <li><Link to='/services' className='a'>Services</Link></li>
                        <li><CalcModal/></li>
                    </ul>
                </div>
            </nav>

            <div className='scroll'>
            <center style={{display:'flex', justifyContent:'center'}}><h1 style={{color:'#000'}}>TERMS OF USE</h1></center> <br/>
            <p><br/>
            <b>1. Introduction</b><br/>
           Welcome to ClearedTalent (“Company”, “we”, “our”, “us”)!<br/>
           These Terms of Service (“Terms”, “Terms of Service”) govern your use of our website located at <a href="link">www.mywebpage.com</a> (“Service”, “Services”) operated by <strong>MyWebpage</strong>.<br/>
           Your agreement with us includes these Terms. You acknowledge that you have read and understood Terms, and agree to be bound of them.<br/>
           If you do not agree with (or cannot comply with) Terms, then you may not use the Service,but please let us know by emailing at <strong>support@mywebpage.com</strong> so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.<br/><br/>
           
           <b>2. Communications</b><br/>
           By using our Service, you agree to receive notifications, subscribe to newsletters, marketing or promotional materials and other information we may send. 
           However, you may opt out of receiving any, or all, of these communications from us by emailing us at <a href="link">support@mywebpage.com.</a><br/><br/>
           
           <b>3. Intellectual Property</b><br/>
           Service and its content (excluding personal information provided by users), features and functionality are and will remain the exclusive property of ClearedTalent and its licensors. You own any personal information you provide to us, but you also grant us a non-exclusive license to it.<br/>
           ClearedTalent reserves all of its intellectual property rights in the Services. ClearedTalent logos and other ClearedTalent trademarks, service marks, graphics and logos used for our Services are trademarks or registered trademarks of ClearedTalent.<br/><br/>
            
            <b>4. Content</b><br/>
            Content found on or through this Service are used with permission. Sharing of content (including without limitation, skill test or candidate related information) must be done as per established ClearedTalent processes. Content includes but is not limited to question repository and candidate related information. 
            You may not distribute, modify, transmit, reuse, download, store, repost, copy, or use said Content, whether in whole or in part, for commercial or other purposes, without express advance written permission from us.<br/>
            You and ClearedTalent agree that we may access, store, process and use any information and personal data that you provide in accordance with the terms of the <a href="link">Privacy Policy.</a><br/><br/>
            
            <b>5. Accounts</b><br/>
            When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate at all times. Inaccurate information may result in the immediate termination of your account on Service.<br/>
            You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. 
            You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service.
            You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.<br/>
            You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. 
            You may not use as a username any name that is offensive, vulgar or obscene.<br/>
            If you are a candidate, you understand that the information made available to ClearedTalent may be shared with prospective employers and/or recruiters for contract or full-time job opportunities. 
            Your profile may contain video interviews or video introduction which may also be shared with prospective employers and/or recruiters for contract or full-time job opportunities. 
            You can hide specific information if ClearedTalent allows such functionality.<br/>
            We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.
            If you wish to terminate your account, you may simply discontinue using Service. You can also deactivate your account by emailing us at support@mywebpage.com.<br/>
            All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.<br/><br/>
            
            <b>6. Feedback</b><br/>
            You may provide us either directly at support@clearedtalent.com or via our account managers feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”). 
            You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) 
            Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership 
            to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create 
            derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.<br/><br/>
            
            <b>7. Limitation of Liability</b><br />
            EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY 
            INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS’ FEES AND 
            ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT 
            LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, 
            OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY 
            OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, 
            STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
            EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT 
            PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. 
            SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR 
            LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.<br /><br />
            
            <b>8. Governing Law</b><br/>
            These Terms shall be construed in accordance with and governed by the laws of State of Georgia(USA).<br/><br/>
            
            <b>9. Acknowledgement</b><br/>
            BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.<br /><br />
           
            <b>10. Contact Us</b><br />
            Please send your feedback, comments, requests for technical support by email: <b>support@mywebpage.com.</b>
        </p>  
            </div>

            <footer>
                <p className='footer-text'>My Webpage. © 2023. All Rights Reserved</p>
            </footer>
        
        </>
    );
};
 
export default About;