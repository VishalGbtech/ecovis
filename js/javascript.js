"use strict";
var plants = [
    {name: 'KOLKATA', coords: [22.5726, 88.3639]},
    {name: 'Ahmedabad', coords: [23.0225, 72.5714]},
    {name: 'Delhi', coords: [28.7041, 77.1025]},
    {name: 'Indore', coords: [22.3196, 75.8577]},
    {name: 'Hyderabad', coords: [17.3850, 78.4867]},
    {name: 'Mumbai', coords: [18.9256, 72.8242]},
    {name: 'Chennai', coords: [13.0827, 80.2707]},
    {name: 'Jaipur', coords: [26.9124, 75.7873]},
    {name: 'Nagpur', coords: [21.1458, 79.0882]},
    {name: 'Pune', coords: [18.5204, 73.8567]}
];

// =================================================================  index page js  ==============================================================
function hover(element) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
}

function unhover(element) {
    element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
}


$("#client_stories_1").mouseover(function (e) {
    $(this).attr("src", $(this).attr("src").replace("ecovis_new_images/baggingoutcomes_b.jpg", "ecovis_new_images/baggingoutcomes_r.jpg"));
}).mouseout(function (e) {
    $(this).attr("src", $(this).attr("src").replace("ecovis_new_images/baggingoutcomes_r.jpg", "ecovis_new_images/baggingoutcomes_b.jpg"));
});

// Services offered by our experts at Ecovis
const ServicesOffered = [
    {
        id: 1,
        imageClass: 'Strategy_Performance_Consulting_logo',
        link: 'Strategy_Performance_Consulting_services',
        heading: 'Strategy & Performance Consulting',
        details: 'Giving you the certainty to drive open and straightforward development.'
    },
    {
        id: 2,
        imageClass: 'Onshoreb_logo',
        link: 'Onshore_Offshore_Advisory',
        heading: 'Onshore & Offshore advisory',
        details: 'Ecovis has experience offering both onshore and offshore advisory services.'
    },
    {
        id: 3,
        imageClass: 'Risk_Compliance_logo',
        link: 'Government_risk_compliance',
        heading: 'Governance risk & compliance',
        details: 'We prepare organizations for any unexpected challenges.'
    },
    {
        id: 4,
        imageClass: 'businessSupport_logo',
        link: 'BusinessSupportandFinancialReporting',
        heading: 'Business support & financial Reporting',
        details: 'Offering accounting business support to grow your business.'
    },
    {
        id: 5,
        imageClass: 'Legalb_logo',
        link: 'LitigationLegalServices',
        heading: 'Legal & Litigation Services',
        details: 'We create a platform to offer you legal services and consultancy.'
    },
    {
        id: 6,
        imageClass: 'financial_capital_Services',
        link: 'Financial_and_Capital_Services',
        heading: 'Financial & Capital Services',
        details: 'We want to build a long-term value in the financial services business by transforming it from the ground up.'
    },
    {
        id: 7,
        imageClass: 'Digital_Transformationb_logo',
        link: 'Digital_transformation',
        heading: 'Digital Transformation',
        details: 'Transform and foster your business digitally using our digital transformation services.'
    },
    {
        id: 8,
        imageClass: 'Capacityb_logo',
        link: 'Crossborderandmerchantbankingservices',
        heading: 'Cross border & merchant banking advice',
        details: 'Capacity and Capability building is becoming one of the fundamental responsibilities, and it is evolving into a high-quality service.'
    }
];
ServicesOffered.map((value, index) => {
    let ServicesOfferedHTML = `<div class="col-lg-4 col-md-6 col-sm-6 serviceColomn">
                    <a href="./${value.link}" class="text-dark" style="text-decoration: none;">
                        <div class="text-center">
                            <div class="mx-auto service_icons  ">
                                <div class=" w-75 mx-auto services_logo ${value.imageClass} "></div>
                                <!-- <img src="./ecovis_icons/Assurance.png" class="w-75" alt=""> -->
                            </div>
                            <h4 class="offeringservicesHeading primaryHeading">${value.heading}</h4>
                            <p class="offeringservicesdetails">${value.details}</p>
                        </div>
                    </a>

                </div>`;
    $('#ServicesOffered').append(ServicesOfferedHTML);
})

// Services offered details discription

const ServicesOfferedDitails = [
    {
        id: 1,
        Header: [{
            h: 'Strategy & Performance Consulting',
            d: 'The implementation of a strategy plan to fulfil an organization\'s goals is known as strategic execution. The implementation of a method plan to fulfil an organization\'s desires is referred to as strategic execution'
        }
        ],
        p1: [
            {
            image: 'StrategicThinkingPlanning.png',
            h: 'Strategy & Performance Consulting',
            d: ' Strategy & Performance Consulting is a deliberate and reasonable thought process that focuses on the examination of crucial factors and variables that will influence a company\'s, team\'s, or individual\'s long-term performance.'
            },
            {
                image: 'NewProductDevelopmentApproach.png',
                h: 'New Product Development Approach',
                d: ' Product development, often known as new product management, entails the ideation, design, development, and marketing of newly produced or rebranded goods and services.'
            },
            {
                image: 'PerformanceEnablingBusinessGoalsKPIs.png',
                h: 'Performance Enabling Business Goals & KPIs',
                d: ' A Key Performance Indicator (KPI) is a measurable indicator that shows how successfully a company is meeting its stated goals and objectives.'
            },
            {
                image: 'CustomerInsightsEngagement.png',
                h: 'Customer Insights & Engagement',
                d: 'Consumer insights assist organisations in gaining a better understanding of their customer\'s requirements, attitudes, and purchase habits. Learn how to put these information to good use and make informed decisions.'
            },
            {
                image: 'InstitutionalizingRobustPerformanceManagement.png',
                h: 'Institutionalizing Robust Performance Management',
                d: 'Developing a performance management system that improves research organisation\'s impact orientation.'
            }]
    },
    {
        id: 2,
        Header: [{
            h: 'Onshore and Offshore Advisory',
            d: 'Giving both onshore advisory for home clients who wish to grow outbound and offshore advisory for inbound clients who need to put resources into India. We offer advisory on Accessing Global and Virtual business sectors through outbound speculation and functional plans. Proper Positioning of gathering substances for Global Business. India Entry and Exit Planning.'
        }
        ],
        p1: [
            {
                image: 'OffShoreBusinessPlanning.png',
                h: 'Offshore Business Planning',
                d: 'We construct a specific offshore business structure that lowers your worldwide tax responsibilities, diversify your business abroad, and secure your assets, starting with the jurisdiction and then the type of entity.'
            },
            {
                image: 'SuccessionPlanning.png',
                h: 'Succession Planning',
                d: 'Succession planning can bring together the needs of the business and the interests of the personnel with it\'s broad breadth and open procedure.'
            },
            {
                image: 'Residency_Programs.png',
                h: 'Residency Programs',
                d: 'We facilitate the residency application process for applicant, their Designated Dean\'s Offices, Letter of Recommendation (LoR) authors, and programme directors. By allowing applicants to create and deliver their own applications, as well as providing help.'
            },
            {
                image: 'TrustBusinessCompliance.png',
                h: 'Trust/Business Compliance',
                d: 'We assist parties and clients in drafting the legal paperwork needed to formalise the agreement for businesses. We will assist you, your family, or business colleagues in avoiding legal blunders in the present and future.'
            },
            {
                image: 'InternationalTax.png',
                h: 'International Tax',
                d: 'We\'ll be with you, wherever you are, to help your company to understand and manage their global tax affairs. So you can be confident that you\'re doing the right things at the right times in the right places and that you\'re on track to meet your strategic objectives.'
            },
            {
                image: 'CompanyResolutionMatters.png',
                h: 'Company Resolution Matters',
                d: 'We take up company resolution matters and offer the required services. A corporate resolution is usually used by a corporation to establish itself as a separate legal entity from the company\'s owners.'
            }]
    },
    {
        id: 3,
        Header: [{
            h: 'Legal, Risk and IPR Practice',
            d: 'We combine our compliance risk consulting knowledge with digital technologies and data analytics capabilities. Start-up Mentoring are also the services that is facilitated by ECOVIS.'
        }
        ],
        p1: [
            {
                image: 'forensicInvestigations.png',
                h: 'Forensic Investigations',
                d: 'We provide the most dependable, economical, objective, discreet, and complete forensic services available, including criminal, legal, and undercover investigations.'
            },
            {
                image: 'DueDiligence.png',
                h: 'Due Diligence',
                d: 'Prior to making any major business decisions or acquiring a firm, due diligence is an important business method to consider. You must first understand due diligence and how to perform it correctly before you can put your company\'s finances into action.'
            },
            {
                image: 'SupplyChainBrandRisks.png',
                h: 'Supply Chain / Brand Risks',
                d: 'Supply chain and risk management solutions that we deploy can help a company run more efficiently, cut expenses, and improve customer service.'
            },
            {
                image: 'InformationSecuritySystemsConsulting.png',
                h: 'Information Security & Systems Consulting',
                d: 'ISMS Consulting services assist a company in developing, implementing, and operating a consistent set of policies, standards, and procedures (PSP) to manage risks to its information assets.'
            },
            {
                image: 'GDPRCompliance.png',
                h: 'GDPR Compliance',
                d: 'Expand your horizons by selling to larger firms now that you\'re GDPR compliant. Obtain authorization for stalled agreements and markets that were previously inaccessible.'
            },
            {
                image: 'KYCBackgroundChecks.png',
                h: 'KYC & Background Checks',
                d: 'KYC and background checks ensure that the claims made by consumers and/or clients are genuine and that no anomalies exist. As a result, it aids in the development of trust, which is the foundation of all beneficial and successful commercial relationships.'
            }]
    },
    {
        id: 4,
        Header: [{
            h: 'Business Support and Financial Reporting',
            d: 'Tally ERP, SAP, and other Indian and international accounting software are all familiar to our teams. We ensure that accounts are kept in line with both domestic and international reporting standards. To ensure prompt remediation, our staff reviews, analyses, and flags any potential issues.'
        }
        ],
        p1: [
            {
                image: 'forensicInvestigations.png',
                h: 'Accounting Services',
                d: 'We give the support, neutrality, and experience that businesses require to prosper in an ever-changing business environment. We provide a wide range of services in a variety of industries to help business owners and managers gain the knowledge they need to succeed.'
            },
            {
                image: 'DueDiligence.png',
                h: 'Due Diligence',
                d: 'Prior to making any major business decisions or acquiring a firm, due diligence is an important business method to consider. You must first understand due diligence and how to perform it correctly before you can put your company\'s finances into action.'
            },
            {
                image: 'SupplyChainBrandRisks.png',
                h: 'Supply Chain / Brand Risks',
                d: 'Supply chain and risk management solutions that we deploy can help a company run more efficiently, cut expenses, and improve customer service.'
            },
            {
                image: 'InformationSecuritySystemsConsulting.png',
                h: 'Information Security & Systems Consulting',
                d: 'ISMS Consulting services assist a company in developing, implementing, and operating a consistent set of policies, standards, and procedures (PSP) to manage risks to its information assets.'
            },
            {
                image: 'GDPRCompliance.png',
                h: 'GDPR Compliance',
                d: 'Expand your horizons by selling to larger firms now that you\'re GDPR compliant. Obtain authorization for stalled agreements and markets that were previously inaccessible.'
            },
            {
                image: 'KYCBackgroundChecks.png',
                h: 'KYC & Background Checks',
                d: 'KYC and background checks ensure that the claims made by consumers and/or clients are genuine and that no anomalies exist. As a result, it aids in the development of trust, which is the foundation of all beneficial and successful commercial relationships.'
            }]
    },
];
ServicesOfferedDitails.map((value, index) => {
    let hvealues = '';
    value.Header.map((headerValue) => {
        hvealues = `<div class="text-center">
                        <h1 class="mainHeading mb-4 text-center text-light">${headerValue.h}</h1>
                        <h6 class="mx-auto normalText text-justify text-light w-50" style=" line-height: 25px;">
                        ${headerValue.d}
                        </h6>
                    </div>`;
    });
    let subPoints = '';
    console.log(value.p1)
    value.p1.map((pointsValue, index) => {
        subPoints += ` <div class="justify-content-center mx-0 row">
                    <div class="col-md-8">
                        <div class=" mb-3 row" style="border-bottom: 1px solid #cd1432;">
                            <div class="col-3">
                                <div class="text-center">
                                    <div class="mx-auto service_icons">
                                        <img src="./images/icon_images/ServicesOfferedDetails/${pointsValue.image}" class="w-75" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-9">
                                <p class="primaryHeading text-danger ml-3 mb-0 pl-4">${pointsValue.h}</p>
                                <p class="ml-3 pl-4" style=" font-size: var(--secondry_font_size);">${pointsValue.d}</p>
                            </div>
                        </div>
                    </div>
                </div> `;
    })
    let ServicesOfferedDitailsHTML = ` <div class="Strategy_Performance_Consulting_servicesBanner align-items-center d-flex justify-content-center pageBanner">
            ${hvealues}
        </div>
            <div class="banner ">
            <div class="discribeStory mt-5">
                ${subPoints}
            </div>
        </div> 
`;

    $('#ServicesOfferedDitails').append(ServicesOfferedDitailsHTML);
})
// =================================================================  index page js end  ==============================================================


// =================================================================  team.php page js   ==============================================================

// Management Board

const ManagementBoard = [{

    image: '01_Pankaj_Bhargava.jpg',
    Name: 'Pankaj Bhargava',
    position: 'Strategy & Performance Consulting',
    id: 1
},
    {
        image: '06_Sanjeev_Bindal.jpg',
        Name: 'Sanjeev Bindal',
        position: 'Litigation & Legal Services',
        id: 2
    },
    {
        image: '02_Dheeraj_rathi.jpg',
        Name: 'Dheeraj Rathi',
        position: 'Cross border & Merchant Banking Advice',
        id: 3
    },
];

ManagementBoard.map((value) => {
    let html = `<a href="http://localhost/ecovis/teamSpecification?id=${value.id}" style="text-decoration: none" class="text-dark">
 <div class="text-center" id="${value.id}">
                    <div class="mx-auto rounded-circle" style="width: 160px; height: 160px; overflow: hidden;">
                        <img src="./ourTeam_B&W/${value.image}" class="w-100" alt="">
                    </div>
                    <p class="primaryHeading mb-0">${value.Name}</p>
                    <p class="normalText">${value.position}</p>
                </div>
</a>`;

    $('#ManagementBoard').append(html);

});

// COE (Center of Excellence) Leads

const COEBoard = [{
    image: '22_shruti.jpg',
    Name: 'Shruti Ambegaonkar',
    position: 'Strategy & Performance Consulting',
    id: 4
},
    {
        image: '03_Bharat_Mishra.jpg',
        Name: 'Bharat Mishra',
        position: 'Digital Transformation & Data Analytics',
        id: 5
    },
    {image: '23_pankaj_monga.jpeg', Name: 'Pankaj Monga', position: 'Legal, GRC and IPR', id: 6},
    {image: '05_Manish_Adukia.jpg', Name: 'Manish Adukia', position: 'Professional Services', id: 7},
    {
        image: '10_Bala.png',
        Name: 'D. Bala',
        position: 'Associate Director at Netrika Consulting India Pvt Ltd',
        id: 8
    },
];

COEBoard.map((value) => {
    let html = `<a href="http://localhost/ecovis/teamSpecification?id=${value.id} " class="text-dark" style="text-decoration: none">
 <li  id="${value.id}">
                            <div class=" text-center">
                                <div class="mx-auto" style="width: 120px; ">
                                    <img src="./ourTeam_B&W/${value.image}" class="w-100" alt="">
                                </div>
                                <h6 class=" h6 mb-0">${value.Name}</h6>
                                <p class="">${value.position}</p>
                            </div>
                        </li>
</a>`;

    $('#COEBoard').append(html);

})


// =================================================================  index page js end  ==============================================================

// =================================================================  teamSpecification js  ==============================================================
const TeamMembersArray = [{
    id: 4,
    image: 'Shruti-Ambegaoker.png',
    name: 'SHRUTI AMBEGAOKER',
    linkedLink: 'https://www.linkedin.com/in/shruti-ambegaoker',
    designation: 'Partner, COrE Creators India',
    expertise: ['Organization Design', 'Performance Management', 'Talent Assessment, Engagement & Development', 'Organization Diagnostics', 'Culture Building', 'Facilitation'],
    industryExperience: ['Automotive ', 'Chemicals', 'Consumer Products', 'E-commerce', 'Engineering & Manufacturing', 'Financial services', 'Pharmaceutical', 'Retail'],
    qualifications: ['Masters Degree in Human Resource & Organization Development from Delhi School of Economics.', 'Trained on ToPTM Facilitation methodologies', 'Trained ontological coach', 'Certified Leadership Circle consultant', 'Certified Accelerated Learning Facilitator'],
    details: ['Based in our Mumbai office, Shruti leads client engagements across diverse industry segments and anchors product development for our consulting practices.',
        'Shruti is passionate about helping organizations develop sustainably by embedding structure, talent, systems, culture capabilities and uses ToPTM facilitation & co-creation methodologies to involve clients in building these capabilities. She believes people are the key differentiator for an organization and enjoys supporting them develop personally and professionally through coaching and other talent development interventions.',
        'Shruti has over 22 years consulting, advisory, facilitation, organization development and governance experience in India and Asia Pacific. Shruti works with clients across diverse industries to co-create & implement structures and systems to build organization and talent capabilities to enable the organization to achieve its growth aspirations.',
        'Prior to joining COrE Creators, Shruti has worked for two international consulting firms leading their office practices in Mumbai and headed organization development & governance for a leading fast-moving Indian multinational consumer products company.']
},
    {
        id: 1,
        image: 'Pankaj-Bhargava.png',
        name: 'Pankaj Bhargava',
        linkedLink: 'https://www.linkedin.com/in/pankajbhargava-cc/',
        designation: 'Managing Partner, COrE Creators India',
        expertise: ['Strategy', 'Facilitation', 'Organization Design', 'Performance Management', 'Talent Assessment, Engagement & Development', ' Organization Diagnostics', 'Culture Building'],
        industryExperience: ['Consumer Products', 'Pharmaceuticals', 'Engineering & Manufacturing', 'Mining', 'Chemicals, Education', ' Information Technology', 'Infrastructure', 'Construction', 'Retail', 'Consulting', 'Industry bodies', 'Government Departments', 'Automotive', 'E-commerce'],
        qualifications: ['Engineering graduate from Indian Institute of Technology Bombay', 'Post graduate from Indian Institute of Management Calcutta', 'Certified ToPTM Facilitator (CToPF) – only one in India', 'Certified Leadership Circle consultant', 'Certified Accelerated Learning Facilitator'],
        details: ['Based in our Mumbai office, Pankaj leads the consulting business across diverse industry segments and development of new offerings.',
            'Pankaj has a deep understanding of fundamentals of business & people and believes in the power of collective wisdom in any group. He brings this in his work to partner an organization’s journey of change & growth and enables sustainable change through inclusive decision-making and facilitative leadership practices.',
            'Pankaj has over 30 years of experience in Human Resources & Organization Development as a practitioner & facilitator. Over the last 13+ years, he has partnered over 100 organizations in India, Middle East & South East Asia in designing and facilitating organization & leadership development through collaborative planning, learning and change processes that have enabled organization growth.',
            'Prior to Core Creators, Pankaj worked with Marico Limited, a leading Indian multinational in the FMCG industry where he contributed to the creation of a distinct culture that has sustained Marico’s business success. He left Marico in 2007 after heading HR as the Chief of Human Resources.']
    },
    {
        id: 3,
        image: 'DR.png',
        name: 'DHEERAJ RATHI',
        linkedLink: 'https://www.linkedin.com/in/dheerajrathi/',
        designation: 'Partner, COrE Creators India',
        expertise: ['International Business', 'Business Finance', 'Technology Assessment', 'Go To Market Strategy', 'Sales and Distribution Management', 'Risk Management'],
        industryExperience: ['Health Care', 'Banking', 'Consumer Products', 'E-commerce', 'Engineering & Manufacturing', 'Financial services', 'Pharmaceutical', 'Retail'],
        qualifications: ['Tech (JNU), Masters of Management (IIT Bombay)', 'Certified Fraud Examiner (ACFE, USA)', 'Certified Integrated Resource Management (APICS, USA)', 'Trained on ToPTM Facilitation methodologies', 'Certified QMS, ISMS, CGS Trainer', 'Certified Green Belt Six Sigma Expert'],
        details: ['Based in our Mumbai office, Dheeraj leads business development across diverse industry segments and specializes in Financial and Governance consulting.',
            'Dheeraj is passionate about helping organizations find business solutions by combining his understanding of Finance, Sales, Governance and Technology. He believes that people and technology are two key differentiators for any entity to survive in this fast- evolving VUCA world. He deploys this belief in aligning stakeholders to develop solutions for Go-to-Market, Financial Management, Governance Structuring and Fund Raising.',
            'Dheeraj has over 22+ years experience in consulting, advisory, market development, distribution and business finance in India, Middle East and Asia Pacific. He, currently, sits on the Board of more than 15 national and international companies.',
            'Prior to COrE Creators, Dheeraj worked for a leading FMCG company and a Fortune 50 MNC leading their Key Accounts business and Market Development in SAARC Countries. He, then, started his entrepreneurial venture with ECOVIS RKCA, with which he continues to be associated. As part of this venture, he has created a network of leading Chartered Accountants and lawyers to offer solutions in Corporate Finance, Direct/Indirect Taxation, Business Valuations, Structured Funding and Governance frameworks. He has developed a technology platform to enable this network to offer these solutions.']
    },
    {
        id: 5,
        image: '03_Bharat_Mishra.jpg',
        name: 'Bharat Mishra',
        linkedLink: '',
        designation: 'CEO, Goldberries Technology',
        expertise: ['APICS Certified in BSCM', ' SAP certified in SCM procurement ECC 5.0', 'Paper published in IEEE : “Developing job-rotation standards with math'],
        industryExperience: ['Banking', 'Operations', 'Governance of risk & compliance', 'Strategy Management', 'Human Resource', 'Supply Chain Management', 'Sales & Purchase'],
        qualifications: ['Bachelor of Engineering, Mechanical ( Indian Institute of Technology , Guwahati, India )', 'Master of Information Technology (Virginia Polytechnic Institute and State University Virginia, USA)', 'Master of Business Administration in System (S. P. Jain Institute of Business Management, Mumbai, India)'],
        details: ['Eighteen years of experience in IT Implementation/ Operation Management/Strategy Management/Business Analytics/Process Reengineering/Data Analytics.',
            'My industry experience is complemented by my education in Mechanical Engineering (Indian Institute of Technology), Information Technology (Virginia Tech University) and Business management(S P Jain Institute, India) from the leading institutes in the world.',
            ' My key capabilities are in improving corporate profits and decreasing expenditures by applying simple techniques of management. ']
    },
    {
        id: 7,
        image: '05_Manish_Adukia.jpg',
        name: 'Manish Adukia',
        linkedLink: 'https://www.linkedin.com/in/manish-adukia-0778435\n',
        designation: 'Partner – R Kabra & Co. LLP',
        expertise: ['Audits', 'Funds Raising', 'Financial Analysis', 'Wealth Management', 'Sales and Business Development', 'Business Process Outsourcing'],
        industryExperience: ['Telecom', 'Media', 'Hospitality', 'Manufacturing', 'Insurance', 'Mutual Funds', 'Commodities'],
        qualifications: ['B.Com. FC '],
        details: ['Leading Business Support Services vertical and  responsible for expansion of the firm across India.',
            ' Have a rich Corporate experience across diverse industries in different verticals.',
            ' A trained Chartered Accountant with deep expertise in Finance. Forward thinking Finance professional with strong proactive Management skills and extensive knowledge of the Indian market']
    }, {
        id: 8,
        image: '10_D._Bala.jpg',
        name: 'Balasubramaniam Durgavarjhula',
        linkedLink: 'https://www.linkedin.com/in/balasubramaniam/',
        designation: 'Associate Director at Netrika Consulting India Pvt Ltd',
        industryExperience: ['Forensic Investigations', 'Risk Advisory', 'Strategic Financial Advisory', 'Strategic Sourcing & Project Implementatio'],
        expertise: ['Management Consulting', 'Project Management', 'Business Consulting', 'Business Planning & Development', 'Training', 'Development & Mentoring'],
        qualifications: ['Bcom with hons, Accounting & Finance (University of Calcutta)', 'MBA in Management (Asian Institute of Management)', 'Certified Fraud Examiner (CFE) [Association of Certified Fraud Examiners (ACFE)]', 'Risk Management Systems', 'Forensic Accounting and Fraud Examination'],
        details: [' More than two decades of experience covering a broad spectrum of the financial and management advisory space. Research rigor from Crisil, M&A structuring from SBICAPs and Private Equity advisory from KPMG and Brescon along with strong business management skills from Adventity form the bedrock of my consulting services.']
    },
    {
        id: 6,
        image: '23_pankaj_monga.jpeg',
        name: 'Pankaj Monga',
        linkedLink: ': https://www.linkedin.com/in/pankajmonga/',
        designation: 'Partner (Lall & Sethi)',
        industryExperience: ['Brand Protection', 'Investigations & Enforcement', 'Risk Management', 'Strategy Practic'],
        expertise: ['Brand Protection', 'Intellectual Property', 'Risk Management', 'Strategy', 'Due Diligence', 'Mergers & Acquisitions'],
        qualifications: ['Bachelor of Arts - BA, Political Science and Government, Public (Andhra University)', 'Diploma in Tax Laws(Indian Law Institute)', 'Diploma in Corporate Laws and Management (Indian Law Institute)'],
        details: ['A legal professional with over 20 years of experience, delivering innovative IP/brand protection (anti-counterfeiting, anti-diversion, product tampering and Infringement) solutions.',
            'Extensive experience in developing, implementing and communicating global / regional IP strategy and managing execution of holistic and impactful IP / brand protection programs',
            'Highly skilled in navigating through matrix structures and have benefited immensely from the multi-cultural exposure offered by leading European, US and Asian companies. Versatility in managing key external stakeholders, large and complex projects. Good communication and conflict resolution skills. Adept at balancing resources and schedules in high-pressured environments. Excellent networking skills.']
    },

];

// get id from url

let url = window.location.href;
let urlArr = url.split('/');
let id = urlArr[urlArr.length - 1].split('=')[1];
console.log(id);

TeamMembersArray.map((value, index) => {
    let Expertise = '';
    value.expertise.map((Expertisevalue) => {
        Expertise += `<li>${Expertisevalue}</li>`;
    });
    let IndustryExperience = '';
    value.industryExperience.map((industryExperience) => {
        IndustryExperience += `<li>${industryExperience}</li>`;
    });
    let Qualifications = '';
    value.qualifications.map((q) => {
        Qualifications += `<li>${q}</li>`;
    })
    let Details = '';
    value.details.map((d) => {
        Details += `<p class="mb-2">${d}</p>`;
    });
    let HTML;
    if (value.id == id) {
        HTML = `  <div class="row">
                       <div class="col-4">
                            <div class="" id="memberImage">
                                <img src="./OurTeam/${value.image}" class="w-100" alt="${value.name}">
                            </div>
                            <div class="Expertise" id="Expertise">
                                <h5 id="ExpertiseHeading">Expertise</h5>
                                <ul style="list-style: unset;" id="ExpertiseList">
                                   ${Expertise}
                                </ul>
                            </div>
                            <div class="Expertise" id="Expertise">
                                <h5 id="ExpertiseHeading">Industry Experience</h5>
                                <ul style="list-style: unset;" id="ExpertiseList">${IndustryExperience}</ul>
                            </div>
                       </div>
                       <div class="col-8">
                            <h3 class="mb-0 text-uppercase" id="memberName">
                                ${value.name}
                                <a href="${value.linkedLink}" target="_blank">
                                    <span class="text-primary">
                                        <i class="fa-brands fa-linkedin"></i>
                                    </span>
                                </a>
                            </h3>
                            <h5 id="memberDesignation">${value.designation}</h5>
                            <div class="normalText" id="memberDiscription">${Details}</div>
                            <div class="Qualifications" id="Qualifications">
                                <h5 id="QualificationsHeading">Qualifications, Credentials</h5>
                                <ul style="list-style: unset;" id=" QualificationsList">${Qualifications}</ul>
                            </div>
                        </div>
                   </div>`;
    }

    $('#teamMembers').append(HTML);
})
// =================================================================  teamSpecification js end  ==============================================================


