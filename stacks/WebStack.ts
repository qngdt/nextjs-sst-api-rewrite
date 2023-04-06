import { NextjsSite, StackContext } from 'sst/constructs';

export function WebStack({ stack }: StackContext) {
  const site = new NextjsSite(stack, 'nextjs', {
    path: '.',
  });

  stack.addOutputs({
    URL: site.url,
  });
}
