Why interfaces are in concept files:

- The 'i' prefix is .net convention
- The 'Interface' suffix is lengthy
- Concept conveys the purpose of interface delcaration

Why injection by tokens:

- Injection by interface doesn't work in TypeScript because interfaces are a compile-time
  feature absent from the JavaScript runtime.
- In order to map an interface to its concrete implementation we use a token

Why global tokens:

- Things that are globally unique deserve the 'The' prefix.
- Closer to human language
- String safety

Why ApiService:

- Things like url, port number, headers, tokens, HTTP statuses are only concerns of this ApiService
  not higher layers that need to consume the result.

Why EntryService:

- Concerned with persistence and retrieval of calendar entries to be reused in UI components
- Hides lower level concerns like api calls away from higher layers

Further steps:

- Responsive design
