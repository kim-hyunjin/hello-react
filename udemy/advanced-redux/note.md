# Pat component vs Pat Reducers vs Pat Actions

Where should our logic go?

- Synchronous, side-effect free code
  - Prefer Reducers
  - Avoid Action Creators or Components
- Async code or code with side-effect
  - Prefer Action Creators or Components
  - Never use Reducers
