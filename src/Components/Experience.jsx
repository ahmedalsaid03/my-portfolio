import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeader from "./SectionHeader";
import { useContext } from "react";
import { ThemeContext } from "../store/myThemeContext";


const WorkIcon = () => <></>;
const Experience = () => {
 const {isDarkMode} = useContext(ThemeContext)
  return (
    <>
      <SectionHeader first='EXPERIENCE' second='' sectionid='experience' />
      <div>
        <div className='App'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className='vertical-timeline-element--work '
              contentStyle={{
                background: "transparent",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  transparent",
              }}
              date='2015 - 2016'
              iconStyle={{
                background: "#6286a1",
                color: "#fff",
              }}
              icon={<WorkIcon />}>
              <div>
                <h3 className='vertical-timeline-element-title'>Supervisor</h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  El Araby Factory
                </h4>
                <p>
                  Gained hands-on experience in my first role as a supervisor
                  while studying Communications Engineering. Developed strong
                  team management and daily operational oversight skills .
                  Successfully balanced academic commitments with professional
                  responsibilities.
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work '
              contentStyle={{
                background: "transparent",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  transparent",
              }}
              date='2022 - 2023'
              iconStyle={{
                background: "#6286a1",
                color: "#fff",
              }}
              icon={<WorkIcon />}>
              <div>
                <h3 className='vertical-timeline-element-title'>
                  Site Engineer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  DELTA UPS & Voltage Stabilizers
                </h4>
                <p>
                  Designing and assembling coils to enhance power stability and
                  reduce electrical interference. Adjusting technical
                  specifications of coils to meet the requirements of various
                  electronic devices I also worked at INNOVASIS UPS in the same
                  specialization.
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work '
              contentStyle={{
                background: "transparent",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  transparent",
              }}
              date='2023 - 2024'
              iconStyle={{
                background: "#6286a1",
                color: "#fff",
              }}
              icon={<WorkIcon />}>
              <div>
                <h3 className='vertical-timeline-element-title'>
                  Site Engineer
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Microterm
                </h4>
                <p>
                  Designing and overseeing thermostat production to ensure
                  precise temperature control in various devices and enhancing
                  product reliability by optimizing components for consistent
                  and efficient temperature regulation .
                </p>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work '
              contentStyle={{
                background: "transparent",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  transparent",
              }}
              date='2024 - present'
              iconStyle={{
                background: "#6286a1",
                color: "#fff",
              }}
              icon={<WorkIcon />}>
              <div>
                <h3 className='vertical-timeline-element-title'>
                  Web Development
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                  Self Learning
                </h4>
                <p>
                  Web Development Enthusiast (2024 - Present) Since 2024, I have
                  been dedicated to learning and mastering web development. My
                  journey includes gaining hands-on experience with front-end
                  technologies like HTML, CSS, JavaScript, and frameworks like
                  React. I have built various projects to strengthen my skills,
                  focusing on creating responsive designs, implementing
                  interactive features, and optimizing user experiences. Feel
                  free to customize it further based on your preferences!
                </p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Experience;
