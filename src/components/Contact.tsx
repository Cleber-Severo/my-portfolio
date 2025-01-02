import { Card, CardContent } from '@mui/material';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { SiLinkedin } from '@react-icons/all-files/si/SiLinkedin';
import { SiGmail } from '@react-icons/all-files/si/SiGmail';
import { HiDownload } from '@react-icons/all-files/hi/HiDownload';

import SectionTitle from './SectionTitle';

import './styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <SectionTitle text="Contato" />
      <Card className="card-contact">
        <CardContent>
          <a href="mailto:clebersevero1998@gmail.com" target="_blank">
            <div className="cantact-item">
              <SiGmail />
              <span>clebersevero1998@gmail.com</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/cleber-severo/" target="_blank">
            <div className="cantact-item">
              <SiLinkedin />
              <span>linkedin.com/in/cleber-severo/</span>
            </div>
          </a>
          <a href="https://github.com/Cleber-Severo" target="_blank">
            <div className="cantact-item">
              <SiGithub />
              <span>github.com/Cleber-Severo</span>
            </div>
          </a>
          <div className="contact-actions">
            <button>
              <a
                href="https://drive.google.com/file/d/1PuunEYpr8j5Av_FJFOroKGiaj7o5hYgB/view?usp=sharing"
                target="_blank"
              >
                Download cv <HiDownload />
              </a>
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
