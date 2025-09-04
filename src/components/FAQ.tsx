'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styled from 'styled-components';

import MinusIcon from '@/icons/MinusIcon';
import PlusIcon from '@/icons/PlusIcon';
import { colors } from '@/styles/colors';

import Container from './Container';
import { DesktopContainer, MobileContainer } from './Responsive';
import Typography from './Typography';

const OutsideContainer = styled.div`
  @media (max-width: 1080px) {
    background-color: ${colors.background.white};
    width: 100%;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 76px 20px;
  background-color: ${colors.background.white};
  border-radius: 14px;
  margin-bottom: 64px;
  align-items: center;
  gap: 40px;
  @media (max-width: 1080px) {
    padding: 32px 0 48px 0;
    margin-bottom: 50px;
    gap: 0;
  }
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 768px;
`;

const QA = styled.details`
  border-bottom: 1px solid ${colors.border.light};
  width: 100%;
  &:last-child {
    border-bottom: none;
  }
`;

const Summary = styled.summary`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0 32px 0;
  cursor: pointer;
  &::-webkit-details-marker {
    display: none;
  }
  details[open] > & {
    padding: 24px 0 8px 0;
  }
  @media (max-width: 1080px) {
    padding: 24px 0 10px 0;
    details[open] > & {
      padding: 24px 0 8px 0;
    }
  }
`;

const IconBox = styled.div`
  width: 24px;
  > :first-child {
    display: block;
  }
  > :last-child {
    display: none;
  }

  details[open] & > :first-child {
    display: none;
  }
  details[open] & > :last-child {
    display: block;
  }
`;

const Answer = styled.div`
  details[open] & {
    padding-bottom: 32px;
    @media (max-width: 1080px) {
      padding-bottom: 10px;
    }
  }
`;

const FAQ: React.FC = () => {
  const tFAQ = useTranslations('FAQ');
  const questions = [1, 2, 3, 4, 5, 6];
  return (
    <OutsideContainer>
      <Container>
        <MainContainer>
          <DesktopContainer>
            <Typography variant='display-md' weight='semibold'>
              {tFAQ('title')}
            </Typography>
          </DesktopContainer>
          <MobileContainer>
            <Typography variant='text-xl' weight='semibold'>
              {tFAQ('title')}
            </Typography>
          </MobileContainer>
          <QuestionList>
            {questions.map(i => (
              <QA key={i}>
                <Summary>
                  <DesktopContainer>
                    <Typography variant='text-lg' weight='medium' color={colors.text.primary}>
                      {tFAQ(`question${i}.title`)}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography variant='text-sm' weight='medium' color={colors.text.primary}>
                      {tFAQ(`question${i}.title`)}
                    </Typography>
                  </MobileContainer>

                  <IconBox aria-hidden>
                    <PlusIcon />
                    <MinusIcon />
                  </IconBox>
                </Summary>
                <Answer>
                  <DesktopContainer>
                    <Typography variant='text-md' color={colors.text.tertiary}>
                      {tFAQ(`question${i}.answer`)}
                    </Typography>
                  </DesktopContainer>
                  <MobileContainer>
                    <Typography variant='text-xs' color={colors.text.tertiary}>
                      {tFAQ(`question${i}.answer`)}
                    </Typography>
                  </MobileContainer>
                </Answer>
              </QA>
            ))}
          </QuestionList>
        </MainContainer>
      </Container>
    </OutsideContainer>
  );
};

export default FAQ;
