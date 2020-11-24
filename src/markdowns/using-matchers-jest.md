---
title: "Using Matchers - Jest"
category: "Jest"
type: "Documentation"
---


# Using Matchers

Jest > Introduction > Using Matchers

## Common Matchers

`expect(2+3)` => "expectation" object

matchers:

- toBe() -> test exact equality
- toEqual() -> test value (NOT same as ==)
- not -> !

## Truthiness

- toBeNull -> match null
- toBeUndefined -> match undefined
- toBeDefined -> anything but not undefined
- toBeTruthy -> same as if
- toBeFalsy -> same as if !

## Numbers

- `>` -> toBeGreaterThan()
- `>=` -> toBeGreaterThanOrEqual()
- `<` -> toBeLessThan()
- `<=` -> toBeLessThanOrEqual()
- toBe() === toEqual()
- toBeCloseTo() -> float

## Strings

- toMatch() -> /regx/

## Arrays and iterables

- toContain()

## Expectation

- toThrow(...)


##

[Reference](https://jestjs.io/docs/en/expect)

[Testing Asynchronous Code →](snippetslab://snippet/12794DE5-1A25-43A8-B464-A3DDD2EFE24D/)
