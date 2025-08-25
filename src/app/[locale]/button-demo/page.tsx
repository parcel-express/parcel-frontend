'use client';

import styled from 'styled-components';

import { Button, Heading2, BodyMedium } from '../../../components';

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const SizeGrid = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const StyledHeading2 = styled(Heading2)`
  margin-bottom: 2rem;
`;

const SectionHeading = styled(Heading2)`
  font-size: 24px;
`;

const WhiteBodyMedium = styled(BodyMedium)`
  margin-bottom: 1rem;
`;

export default function ButtonDemo() {
  return (
    <Container>
      <StyledHeading2 color='#ffffff'>Interactive Button Demo</StyledHeading2>

      <Section>
        <SectionHeading color='#ffffff'>Button Variants</SectionHeading>
        <BodyMedium color='rgba(255, 255, 255, 0.9)'>
          Click and hold to see the enhanced interactions with scale, shadows, and ripple effects.
        </BodyMedium>
        <ButtonGrid>
          <Button variant='default' size='md'>
            Default
          </Button>
          <Button variant='primary' size='md'>
            Primary
          </Button>
          <Button variant='secondary' size='md'>
            Secondary
          </Button>
          <Button variant='tertiary' size='md'>
            Tertiary
          </Button>
          <Button variant='disabled' size='md' disabled>
            Disabled
          </Button>
        </ButtonGrid>
      </Section>

      <Section>
        <SectionHeading color='#ffffff'>Button Sizes</SectionHeading>
        <BodyMedium color='rgba(255, 255, 255, 0.9)'>
          Different sizes with consistent interactive effects.
        </BodyMedium>
        <SizeGrid>
          <Button variant='primary' size='xs'>
            XS Button
          </Button>
          <Button variant='primary' size='sm'>
            SM Button
          </Button>
          <Button variant='primary' size='md'>
            MD Button
          </Button>
          <Button variant='primary' size='lg'>
            LG Button
          </Button>
          <Button variant='primary' size='xl'>
            XL Button
          </Button>
        </SizeGrid>
      </Section>

      <Section>
        <SectionHeading color='#ffffff'>Interactive States</SectionHeading>
        <BodyMedium color='rgba(255, 255, 255, 0.9)'>
          Hover for lift effects, click for scale and ripple animations.
        </BodyMedium>
        <ButtonGrid>
          <Button variant='primary' size='lg'>
            Try Clicking Me!
          </Button>
          <Button variant='secondary' size='lg'>
            Hover & Click
          </Button>
          <Button variant='default' size='lg'>
            Interactive Button
          </Button>
          <Button variant='primary' size='lg' focused>
            Focused State
          </Button>
        </ButtonGrid>
      </Section>

      <Section>
        <SectionHeading color='#ffffff'>Click Effects Include:</SectionHeading>
        <WhiteBodyMedium color='rgba(255, 255, 255, 0.9)'>
          ✨ Hover: Subtle lift with enhanced shadows
          <br />
          🎯 Click: Scale down (0.96-0.98) with faster transition
          <br />
          💫 Ripple: Expanding circle effect on click
          <br />
          🎨 Enhanced borders and shadows
          <br />⚡ Smooth cubic-bezier transitions
        </WhiteBodyMedium>
        <Button variant='primary' size='lg' onClick={() => console.warn('Button clicked!')}>
          Click Me!
        </Button>
      </Section>
    </Container>
  );
}
