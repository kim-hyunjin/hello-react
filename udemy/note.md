# How React Works

- Build your own, custom HTML Elements
- React is all about "Components"
- React allows you to create re-usable and reactive components consisting of HTML and JavaScript (and CSS)
- Declarative Approach
- Define the desired target state(s) and let React figure out the actual JavaScript DOM instructions

# Why Components?

- Reusability : Don't repeat yourself
- Separation of Concerns : Don't do too many things in one and the same place (function)
- Split big chunks of code into multiple smaller functions

# React Context Limitations

- React Context is NOT optimized for high frequency changes
- React Context shouldn't be used to replace ALL component communications and props
  - Component should still be configurable via props and short "props chains" might not need any replacement

# Rules of Hooks

- Only call React Hooks in React Functions
  - React Component Functions, custom React Hooks
- Only call React Hooks at the TOP Level
  - Don't call them in nested functions, any block statements
- unofficial Rule for useEffect(): Always add everything you refer to inside of useEffect() as a dependency unless there is no good reason not do
