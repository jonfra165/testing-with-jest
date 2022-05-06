const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('Try to pop a element from the stack', () => {
    const expected = "hej";
    stack.push(expected);
    expect(stack.peek()).toBe(expected);
    const actual = stack.pop();
    expect(actual).toBe(expected);
    expect(stack.peek()).not.toBe(expected);
});