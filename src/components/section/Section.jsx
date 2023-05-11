import PropTypes from 'prop-types'
import { MainTitle, MainSection } from './Section.styled';
import { iconReactHook } from 'utils/svgIcons';

export const Section = ({ title, children }) => {
   return (
   <MainSection>
     <MainTitle>{title} { iconReactHook }</MainTitle>
     {children}  
    </MainSection>)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
  };
  