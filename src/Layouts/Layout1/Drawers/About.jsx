import { Drawer, Space } from 'antd';
import React from 'react';
import aboutImg from '../../../assets/sadi.jpg';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import mernImg from '../../../assets/mern.png';
import frontendImg from '../../../assets/frontend.png';
import issueFixImg from '../../../assets/issue.jpg';
import './About.css';
import { IoMdClose } from 'react-icons/io';
import jsPDF from 'jspdf';


const About = ({ openDrawer, setOpenDrawer }) => {

  const onClose = () => {
    setOpenDrawer(null);
  };

  const generatePDF = () => {

    const pdf = new jsPDF('p', 'mm', 'a4');

    let positionX = 20;
    let positionY = 20;

    // AUTHOR NAME
    pdf.setFont("courier", "semibold");
    pdf.setFontSize(22);
    pdf.text('Sadi Muhammad Tanzim', 105, positionY, null, null, "center");
    positionY += 7;

    // AUTHOR ADDRESS
    pdf.setFont("times", "normal");
    pdf.setFontSize(10);
    pdf.text('Dhaka, Bangladesh | saditanzim@gmail.com | +8801687192402', 105, positionY, null, null, "center");
    positionY += 6;

    // AUTHOR SOCIAL LINKS
    pdf.text('linkedin.com/in/sadi-muhammad-tanzim | github.com/sadi73', 105, positionY, null, null, "center");
    positionY += 13;

    // EXPERIENCE
    pdf.setFont("courier", "semibold");
    pdf.setFontSize(16);
    pdf.text(positionX, positionY, 'Experience');
    positionY += 2;

    pdf.setLineWidth(0.3);
    pdf.setDrawColor(232, 232, 232);
    pdf.line(20, positionY, (pdf.internal.pageSize.getWidth() - 20), positionY);
    positionY += 7;

    pdf.setFont("times", "bold");
    pdf.setFontSize(12);
    pdf.text(positionX, positionY, 'Software Engineer I,');

    pdf.setFont("times", "normal");
    pdf.setFontSize(10);
    pdf.text(59, positionY, 'Neural Semiconductor Limited');
    pdf.text(163, positionY, 'Oct 2023 - Present');
    positionY += 5;

    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'Implemented various features based on requirements, enhancing product functionality and user experience.');
    positionY += 5;

    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'Collaborated with cross-functional teams to ensure seamless integration of new features and maintain coding standards.');
    positionY += 7;

    pdf.setFont("times", "bold");
    pdf.setFontSize(12);
    pdf.text(positionX, positionY, 'Associate Software Engineer,');

    pdf.setFont("times", "normal");
    pdf.setFontSize(10);
    pdf.text(74, positionY, 'Neural Semiconductor Limited');
    pdf.text(160, positionY, 'July 2023 - Oct 2023');
    positionY += 5;

    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'As a Trainee Software Engineer, explored existing code bases, identified bugs or issues, and implemented solutions to');
    positionY += 5;
    pdf.text(positionX + 3, positionY, ' enhance product functionality and performance.');
    positionY += 10;

    // EDUCATION
    pdf.setFont("courier", "semibold");
    pdf.setFontSize(16);
    pdf.text(positionX, positionY, 'Education');
    positionY += 2;

    pdf.setLineWidth(0.3);
    pdf.setDrawColor(232, 232, 232);
    pdf.line(20, positionY, (pdf.internal.pageSize.getWidth() - 20), positionY);
    positionY += 7;

    pdf.setFont("times", "bold");
    pdf.setFontSize(11);
    pdf.text(positionX, positionY, 'Rajshahi University of Engineering and Technology');
    pdf.setFont("times", "normal");
    pdf.setFontSize(10);
    pdf.text(173, positionY, '2014 - 2021');
    positionY += 5;
    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'BSc in Computer Science and Engineering');
    positionY += 7;

    pdf.setFont("times", "bold");
    pdf.setFontSize(11);
    pdf.text(positionX, positionY, 'New Govt. Degree College - HSC');
    pdf.setFont("times", "normal");
    pdf.setFontSize(10);
    pdf.text(173, positionY, '2012 - 2014');
    positionY += 5;
    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'GPA: 5.00');
    positionY += 7;

    pdf.setFont("times", "bold");
    pdf.setFontSize(11);
    pdf.text(positionX, positionY, 'Rajshahi Collegiate School - SSC');
    pdf.setFont("times", "normal");
    pdf.setFontSize(10);
    pdf.text(173, positionY, '2014 - 2021');
    positionY += 5;
    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'GPA: 5.00');
    positionY += 10;

    // PROJECTS
    pdf.setFont("courier", "semibold");
    pdf.setFontSize(16);
    pdf.text(positionX, positionY, 'Projects');
    positionY += 2;

    pdf.setLineWidth(0.3);
    pdf.setDrawColor(232, 232, 232);
    pdf.line(20, positionY, (pdf.internal.pageSize.getWidth() - 20), positionY);
    positionY += 7;

    pdf.setFont("times", "bold");
    pdf.setFontSize(11);
    pdf.text(positionX, positionY, 'Tafuri Human Resource Management System');
    pdf.setFont("times", "normal");
    pdf.setFontSize(10);
    pdf.text(138, positionY, 'hrms-demo.neural-semiconductor.com');
    positionY += 5;
    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'Collaborated in developing an advanced HRMS to enhance employee management, payroll processing and performance');
    positionY += 5;
    pdf.text(positionX + 3, positionY, 'tracking. Created a user-friendly interface with real-time updates to enhance operational efficiency.');
    positionY += 5;
    pdf.setFont("times", "bold");
    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'Tools Used:');
    pdf.setFont("times", "normal");
    pdf.text(42, positionY, ' React JS');
    positionY += 7;

    pdf.setFont("times", "bold");
    pdf.setFontSize(11);
    pdf.text(positionX, positionY, 'Bongo Explorer');
    pdf.setFont("times", "normal");
    pdf.setFontSize(10);
    pdf.text(158, positionY, 'bongo-explorer.web.app');
    positionY += 5;
    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'A full-stack travel website where admins create tour packages and users browse, select and book them seamlessly. Feat-');
    positionY += 5;
    pdf.text(positionX + 3, positionY, 'ures user authentication, management, and payment integration for a streamlined experience.');
    positionY += 5;
    pdf.setFont("times", "bold");
    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'Tools Used:');
    pdf.setFont("times", "normal");
    pdf.text(42, positionY, 'React JS, Express JS, MongoDB, Google Firebase');
    positionY += 7;

    pdf.setFont("times", "bold");
    pdf.setFontSize(11);
    pdf.text(positionX, positionY, 'Banu and Haque Homes Limited');
    pdf.setFont("times", "normal");
    pdf.setFontSize(10);
    pdf.text(147, positionY, 'banu-and-haque-homes.web.app');
    positionY += 5;
    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'Developed a real estate website where users can view properties, log in, update profiles, and read customer reviews, with');
    positionY += 5;
    pdf.text(positionX + 3, positionY, ' added animations for an enhanced user experience.');
    positionY += 5;
    pdf.setFont("times", "bold");
    pdf.setFillColor(0, 0, 0);
    pdf.circle(positionX + 1, positionY - 1, 0.8, "FD");
    pdf.text(positionX + 3, positionY, 'Tools Used:');
    pdf.setFont("times", "normal");
    pdf.text(42, positionY, 'React JS, Google Firebase');
    positionY += 10;

    // TECHNOLOGIES
    pdf.setFont("courier", "semibold");
    pdf.setFontSize(16);
    pdf.text(positionX, positionY, 'Technologies');
    positionY += 2;

    pdf.setLineWidth(0.3);
    pdf.setDrawColor(232, 232, 232);
    pdf.line(20, positionY, (pdf.internal.pageSize.getWidth() - 20), positionY);
    positionY += 7;

    pdf.setFont("times", "bold");
    pdf.setFontSize(10);
    pdf.text(positionX, positionY, 'Programming Languages:');
    pdf.setFont("times", "normal");
    pdf.text(61, positionY, 'C, C++, Python');
    positionY += 5;

    pdf.setFont("times", "bold");
    pdf.setFontSize(10);
    pdf.text(positionX, positionY, 'Frontend Technologies:');
    pdf.setFont("times", "normal");
    pdf.text(57, positionY, 'HTML, CSS, JavaScript, Tailwind CSS, React JS, Next JS');
    positionY += 5;

    pdf.setFont("times", "bold");
    pdf.setFontSize(10);
    pdf.text(positionX, positionY, 'Backend Technologies:');
    pdf.setFont("times", "normal");
    pdf.text(56, positionY, 'Node JS, Express JS');
    positionY += 5;

    pdf.setFont("times", "bold");
    pdf.setFontSize(10);
    pdf.text(positionX, positionY, 'Database:');
    pdf.setFont("times", "normal");
    pdf.text(37, positionY, 'MongoDB');
    positionY += 5;

    pdf.setFont("times", "bold");
    pdf.setFontSize(10);
    pdf.text(positionX, positionY, 'Misc:');
    pdf.setFont("times", "normal");
    pdf.text(30, positionY, 'Google Firebase, JSON Web Token (JWT)');
    positionY += 5;

    pdf.save('Resume_Sadi Muhammad Tanzim.pdf');
  }

  return (
    <>

      <Drawer
        placement="bottom"
        size='large'
        className='text-white'
        onClose={onClose}
        open={openDrawer === 'about'}
        extra={
          <Space>
            <button className='text-2xl absolute top-[100px] right-[20px] md:top-30 md:right-10 lg:top-10' onClick={onClose}><IoMdClose /></button>
          </Space>
        }
      >
        <div className='md:w-9/12 mx-auto space-y-10 mt-10'>

          <div>
            <p className='md:text-lg text-center'>Get to know me</p>
            <h1 className='text-2xl md:text-5xl text-center'>ABOUT ME</h1>
          </div>


          <div className='flex flex-col md:flex-row gap-10'>
            <div className='w-11/12 '>
              <img src={aboutImg} className='h-full w-full rounded-lg' alt="" />
            </div>

            <div className='space-y-3'>
              <h3 className='text-[#009e66] text-2xl font-semibold'>Who am i?</h3>
              <h1 className='text-[#f0f0f0] text-3xl font-bold'>I am Sadi Muhammad Tanzim, a full stack developer</h1>
              <p className='text-[#9f9f9f] leading-7'>I am a skilled software engineer specializing in full stack development, with expertise in React JS, Next JS and the MERN stack. Currently, I am employed at a renowned software company where I contribute to developing and maintaining robust, scalable web applications. My passion for technology and continuous learning drives me to stay updated with the latest industry trends and best practices.</p>

              <hr />

              <div className='flex justify-between'>
                <div className='space-y-3'>
                  <h6 className='text-[#9f9f9f]'><span className='font-bold text-[#f0f0f0]'>Name</span>: Sadi Muhammad Tanzim</h6>
                  <h6 className='text-[#9f9f9f]'><span className='font-bold text-[#f0f0f0]'>Phone</span>: +8801687192402</h6>
                </div>

                <div className='space-y-3'>
                  <h6 className='text-[#9f9f9f]'><span className='font-bold text-[#f0f0f0]'>Email</span>: saditanzim@gmail.com</h6>
                  <h6 className='text-[#9f9f9f]'><span className='font-bold text-[#f0f0f0]'>From</span>: Dhaka, Bangladesh</h6>
                </div>
              </div>

              <hr />

              <div className='flex justify-between items-center'>
                <div>
                  {/* <button
                    className='bg-[#009e66] px-3 py-2 rounded-xl font-semibold'
                    onClick={generatePDF}
                  >Download Resume</button> */}

                  <a
                    href='https://drive.google.com/file/d/1iyuWQr4VQOHselHdfLCRCqpUGMZRTVfd/view?usp=sharing'
                    target='_blank'
                    className='bg-[#009e66] px-3 py-2 rounded-xl font-semibold hover:text-white'
                  >Download Resume</a>
                </div>

                <div className='flex gap-3 text-xl'>
                  <a href="https://github.com/Sadi73"> <FaGithub /></a>
                  <a href="https://www.linkedin.com/in/sadi-muhammad-tanzim"> <FaLinkedin /></a>
                  <a href="https://www.facebook.com/sadi.tanzim/"> <FaFacebook /></a>
                </div>
              </div>

            </div>
          </div>

          <h1 className='text-3xl md:text-5xl text-center'>My Expertise</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
            <div className="image-card" >
              <img src={mernImg} alt='' />
              <div className="overlay font-bold text-xl">MERN Development</div>
            </div>

            <div className="image-card" >
              <img src={frontendImg} alt='' />
              <div className="overlay font-bold text-xl">Frontend Development</div>
            </div>

            <div className="image-card" >
              <img src={issueFixImg} alt='' />
              <div className="overlay font-bold text-xl">Issue Fixing</div>
            </div>

          </div>

          <h1 className='text-3xl md:text-5xl text-center'>Technologies that I Use</h1>

          <div className='leading-7'>
            <h1><span className='font-semibold text-[#f0f0f0]'>Frontend: </span><span className='text-[#9f9f9f]'>HTML || CSS || Tailwind || JavaScript || React JS || Next JS</span></h1>
            <h1><span className='font-semibold text-[#f0f0f0]'>Backend:</span> <span className='text-[#9f9f9f]'> Node JS || Express JS || MongoDB</span></h1>
            <h1><span className='font-semibold text-[#f0f0f0]'>Misc:</span> <span className='text-[#9f9f9f]'>Google Firebase || JSON Web Token</span></h1>
          </div>
          <div>

          </div>
        </div>

      </Drawer>
    </>
  );
};
export default About;