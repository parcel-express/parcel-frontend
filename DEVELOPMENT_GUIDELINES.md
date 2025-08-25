# Development Guidelines for Junior Developers

This document outlines the development standards, best practices, and validation
rules for the Parcel Express frontend project.

## 🎯 Code Quality Standards

### Required Tools

All code must pass the following validations before being committed:

- **ESLint** - Code linting and design system enforcement
- **Prettier** - Code formatting consistency
- **TypeScript** - Strict type checking
- **Husky** - Pre-commit hooks
- **lint-staged** - Automatic code fixing on commit

### Available Scripts

```bash
# Development
npm run dev              # Start development server

# Code Quality
npm run lint             # Check for linting errors
npm run lint:fix         # Automatically fix linting errors
npm run type-check       # Check TypeScript types
npm run format           # Format code with Prettier
npm run format:check     # Check if code is formatted
npm run validate         # Run all quality checks (type-check + lint + format)

# Production
npm run build            # Build for production
npm run start            # Start production server
```

## 🚨 Mandatory Design System Rules

### Button Component Usage

❌ **NEVER DO THIS:**

```tsx
// DON'T use HTML button elements
<button onClick={handleClick}>Click me</button>;

// DON'T use custom styled buttons
const CustomButton = styled.button`
  background: blue;
  color: white;
`;
```

✅ **ALWAYS DO THIS:**

```tsx
// USE the design system Button component
import { Button } from '@/components';

<Button variant='primary' size='md' onClick={handleClick}>
  Click me
</Button>;
```

### Typography Component Usage

❌ **NEVER DO THIS:**

```tsx
// DON'T use raw HTML text elements
<h1>Page Title</h1>
<p>Some text content</p>
<span>Small text</span>

// DON'T use custom styled text
const Title = styled.h1`
  font-size: 2rem;
  color: black;
`;
```

✅ **ALWAYS DO THIS:**

```tsx
// USE Typography components
import { Heading1, BodyMedium, Caption } from '@/components';

<Heading1>Page Title</Heading1>
<BodyMedium>Some text content</BodyMedium>
<Caption>Small text</Caption>
```

## 🔒 TypeScript Rules

### Strict Type Safety

- **No `any` types** - Use specific types or `unknown`
- **No non-null assertions (`!`)** - Use proper null checks
- **Required prop types** - All component props must be typed
- **No implicit returns** - Always explicitly return values

### Examples

❌ **AVOID:**

```tsx
// Bad: any type
const data: any = fetchData();

// Bad: non-null assertion
const user = getUser()!;

// Bad: implicit return
const multiply = (a: number, b: number) => a * b;
```

✅ **GOOD:**

```tsx
// Good: specific types
interface UserData {
  id: string;
  name: string;
}
const data: UserData = await fetchData();

// Good: null checks
const user = getUser();
if (user) {
  // Safe to use user
}

// Good: explicit return type
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

## 🎨 Code Formatting Rules

### Prettier Configuration

- **Single quotes** for strings
- **Semicolons** required
- **100 character** line length
- **2 space** indentation
- **Trailing commas** in ES5 syntax

### Import Organization

Imports must be organized in this order:

1. Node modules (React, Next.js, etc.)
2. Internal modules (@/components, @/utils, etc.)
3. Relative imports (./component, ../utils)

```tsx
// Good import order
import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

import { Button, Typography } from '@/components';
import { useAuth } from '@/hooks';

import './component.css';
```

## 🚀 Component Development Rules

### Component Structure

1. **Imports** (organized as above)
2. **Type definitions** (interfaces, types)
3. **Styled components** (if any)
4. **Main component function**
5. **Default export**

```tsx
import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components';

// Types
interface MyComponentProps {
  title: string;
  onClick: () => void;
}

// Styled components
const Container = styled.div`
  padding: 1rem;
`;

// Main component
export const MyComponent: React.FC<MyComponentProps> = ({ title, onClick }) => {
  return (
    <Container>
      <Button variant='primary' onClick={onClick}>
        {title}
      </Button>
    </Container>
  );
};

export default MyComponent;
```

### Component Naming

- **PascalCase** for component files and names
- **camelCase** for props and variables
- **kebab-case** for file paths and URLs

## 🔍 ESLint Enforcement

The following will cause build failures:

- Using HTML `<button>` instead of `<Button>` component
- Using HTML text elements (`<h1>`, `<p>`, `<span>`) with text content
- Using `console.log()` (use `console.warn()` or `console.error()`)
- Missing keys in React lists
- Unused variables or imports
- Mixing different styling libraries

## 🔧 Pre-commit Validations

Every commit automatically runs:

1. **lint-staged** - Fixes code formatting and linting
2. **Type checking** - Validates TypeScript types
3. **ESLint** - Enforces code quality rules

If any validation fails, the commit will be rejected.

## 🚨 Common Mistakes to Avoid

### 1. Bypassing Design System

```tsx
// ❌ DON'T DO THIS
const MyButton = styled.button`
  background: linear-gradient(45deg, blue, purple);
  color: white;
  padding: 12px 24px;
`;

// ✅ DO THIS
<Button variant='primary' size='lg'>
  My Button
</Button>;
```

### 2. Inline Styles

```tsx
// ❌ DON'T DO THIS
<div style={{ marginTop: '20px', fontSize: '16px' }}>Content</div>;

// ✅ DO THIS
const StyledDiv = styled.div`
  margin-top: 20px;
`;

<StyledDiv>
  <BodyMedium>Content</BodyMedium>
</StyledDiv>;
```

### 3. Missing Type Definitions

```tsx
// ❌ DON'T DO THIS
const handleClick = data => {
  // ...
};

// ✅ DO THIS
interface ClickData {
  id: string;
  name: string;
}

const handleClick = (data: ClickData): void => {
  // ...
};
```

## 📋 Code Review Checklist

Before submitting a PR, ensure:

- [ ] All design system components are used correctly
- [ ] No HTML button or text elements with content
- [ ] All types are properly defined
- [ ] No `any` types used
- [ ] Code is formatted with Prettier
- [ ] ESLint passes without errors
- [ ] TypeScript compiles without errors
- [ ] Build succeeds (`npm run build`)
- [ ] All validation checks pass (`npm run validate`)

## 🆘 Getting Help

If you encounter any issues:

1. Run `npm run validate` to check all issues
2. Run `npm run lint:fix` to auto-fix linting issues
3. Check the design system documentation in `CLAUDE.md`
4. Review existing components for examples
5. Ask senior developers for guidance

## 📚 Additional Resources

- [Design System Documentation](./CLAUDE.md)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [React Best Practices](https://react.dev/learn)
