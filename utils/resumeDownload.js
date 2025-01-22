import jsPDF from 'jspdf';

export const generatePDF = () => {

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