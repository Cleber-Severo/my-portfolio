import { ISectionTitleProps } from '../types/Title';
import './styles/SectionTitle.css'

const SectionTitle = ({ text }: ISectionTitleProps) => {
  return <h2 className='section-title'>{text}</h2>;
};

export default SectionTitle;
