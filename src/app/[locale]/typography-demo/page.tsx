'use client'

import styled from 'styled-components'
import { 
  Typography,
  Heading1, 
  Heading2, 
  Heading3, 
  Heading4, 
  Heading5, 
  Heading6,
  BodyLarge,
  BodyMedium,
  BodySmall,
  Caption
} from '../../../components'

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const Section = styled.section`
  margin-bottom: 3rem;
`

const WeightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 1rem;
`

const WeightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SecondWeightGrid = styled(WeightGrid)`
  margin-top: 2rem;
`

export default function TypographyDemo() {
  return (
    <Container>
      <Heading1>Typography System</Heading1>
      <BodyLarge color="#535862">Complete typography scale based on Figma design system</BodyLarge>
      
      <Section>
        <Heading2>Display Sizes</Heading2>
        <WeightGrid>
          <WeightColumn>
            <Typography variant="display-2xl" weight="regular">Display 2xl</Typography>
            <Caption>Regular</Caption>
          </WeightColumn>
          <WeightColumn>
            <Typography variant="display-2xl" weight="medium">Display 2xl</Typography>
            <Caption>Medium</Caption>
          </WeightColumn>
          <WeightColumn>
            <Typography variant="display-2xl" weight="semibold">Display 2xl</Typography>
            <Caption>Semibold</Caption>
          </WeightColumn>
          <WeightColumn>
            <Typography variant="display-2xl" weight="bold">Display 2xl</Typography>
            <Caption>Bold</Caption>
          </WeightColumn>
        </WeightGrid>
        
        <SecondWeightGrid>
          <WeightColumn>
            <Typography variant="display-xl" weight="regular">Display xl</Typography>
            <Caption>Regular</Caption>
          </WeightColumn>
          <WeightColumn>
            <Typography variant="display-xl" weight="medium">Display xl</Typography>
            <Caption>Medium</Caption>
          </WeightColumn>
          <WeightColumn>
            <Typography variant="display-xl" weight="semibold">Display xl</Typography>
            <Caption>Semibold</Caption>
          </WeightColumn>
          <WeightColumn>
            <Typography variant="display-xl" weight="bold">Display xl</Typography>
            <Caption>Bold</Caption>
          </WeightColumn>
        </SecondWeightGrid>
      </Section>

      <Section>
        <Heading3>Semantic Headings</Heading3>
        <FlexColumn>
          <Heading1>Heading 1 - Display XL Bold</Heading1>
          <Heading2>Heading 2 - Display LG Semibold</Heading2>
          <Heading3>Heading 3 - Display MD Semibold</Heading3>
          <Heading4>Heading 4 - Display SM Semibold</Heading4>
          <Heading5>Heading 5 - Display XS Semibold</Heading5>
          <Heading6>Heading 6 - Text XL Semibold</Heading6>
        </FlexColumn>
      </Section>

      <Section>
        <Heading3>Text Sizes</Heading3>
        <FlexColumn>
          <BodyLarge>Body Large - Text LG Regular (18px/28px)</BodyLarge>
          <BodyMedium>Body Medium - Text MD Regular (16px/24px)</BodyMedium>
          <BodySmall>Body Small - Text SM Regular (14px/20px)</BodySmall>
          <Caption>Caption - Text XS Regular (12px/18px)</Caption>
        </FlexColumn>
      </Section>

      <Section>
        <Heading3>Weight Variations</Heading3>
        <FlexColumn>
          <Typography variant="text-lg" weight="regular">Regular Weight (400)</Typography>
          <Typography variant="text-lg" weight="medium">Medium Weight (500)</Typography>
          <Typography variant="text-lg" weight="semibold">Semibold Weight (600)</Typography>
          <Typography variant="text-lg" weight="bold">Bold Weight (700)</Typography>
        </FlexColumn>
      </Section>

      <Section>
        <Heading3>Custom Colors</Heading3>
        <FlexColumn>
          <Typography variant="text-lg" color="#181d27">Primary Text (#181d27)</Typography>
          <Typography variant="text-lg" color="#535862">Secondary Text (#535862)</Typography>
          <Typography variant="text-lg" color="#662d91">Brand Purple</Typography>
          <Typography variant="text-lg" color="#302e9c">Brand Blue</Typography>
        </FlexColumn>
      </Section>
    </Container>
  )
}