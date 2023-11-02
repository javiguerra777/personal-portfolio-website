import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../../common/style/SectionTitle';

const MoreSkillsWrapper = styled.div`
  background-color: #28282b;
  height: 100%;
  padding: 10px 15px;
  overflow: auto;
`;

const ReadMoreSkills = () => (
  <MoreSkillsWrapper>
    <SectionTitle>Skills</SectionTitle>
    <h3 className="text-2xl font-semibold mb-3">Software</h3>
    <p className="text-lg mb-1">
      Below are the languages I have the most experience working with.
    </p>
    <p className="mb-1">
      <span className="font-extrabold">Languages:</span> Javascript,
      Typescript, Java, Python, Ruby
    </p>
    <p className="mb-4">
      I am interested in learning more about C# and C++. I have worked
      with those languages a little bit but not extensively
    </p>
    <p className="mb-1 text-lg">
      Below are the frameworks and libraries I have used the most.
    </p>
    <p className="mb-1">
      <span className="font-extrabold">Frameworks/Libraries:</span>{' '}
      Angular, React, React Native, Phaser, Express, Django, Ruby on
      Rails, Java Swing, JavaFX, Pygames, Pygui
    </p>
    <p className="mb-4">
      I am interested in learning more about .Net, Unity, and Unreal
      Engine. I have worked with these technologies briefly, but not
      to a point where I am an expert.
    </p>
    <h3 className="text-2xl font-semibold mb-2">Certificates</h3>
    <h3 className="text-2xl font-semibold mb-2">Soft Skills</h3>
    <p>
      With my experience as a 7th grade elementary teacher. I have
      built on my communication skills, leadership skills, and my
      students have told me they like how respectful and nice I am. I
      have experience with working in groups, I understand how to
      communicate well with others. I have had experience leading
      groups in college and when I worked as a Software Engineer. I
      enjoyed the times when I got to lead groups because I enjoy
      working with people.
    </p>
  </MoreSkillsWrapper>
);

export default ReadMoreSkills;
