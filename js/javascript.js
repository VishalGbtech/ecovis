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
const ServicesOffered = [{
    imageClass: '',
    hoverImageClass: '',
    heading: 'Strategy & Performance Consulting',
    details: 'Giving you the certainty to drive open and straightforward development.'
},
    {
        imageClass: 'Strategy_Performance_Consulting_logo',
        hoverImageClass: '',
        heading: 'Onshore & Offshore advisory',
        details: 'Ecovis has experience offering both onshore and offshore advisory services.'
    },
    {
        imageClass: '',
        hoverImageClass: '',
        heading: 'Governance risk & compliance',
        details: 'We prepare organizations for any unexpected challenges.'
    }]
ServicesOffered.map((value, index)=>{
    let ServicesOfferedHTML = `<div class="col-lg-4 col-md-6 col-sm-6 serviceColomn">
                    <a href="./Strategy_Performance_Consulting_services" class="text-dark" style="text-decoration: none;">
                        <div class="text-center">
                            <div class="mx-auto service_icons  ">
                                <div class=" w-75 mx-auto services_logo Strategy_Performance_Consulting_logo "></div>
                                <!-- <img src="./ecovis_icons/Assurance.png" class="w-75" alt=""> -->
                            </div>
                            <h4 class="offeringservicesHeading primaryHeading">${value.heading}</h4>
                            <p class="offeringservicesdetails">${value.details}</p>
                        </div>
                    </a>

                </div>`;
    $('#ServicesOffered').append(ServicesOfferedHTML);
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


