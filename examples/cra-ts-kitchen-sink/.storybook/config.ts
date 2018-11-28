import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
addDecorator(withA11y);
addParameters({
  options: {
    brandTitle: 'CRA TypeScript Kitchen Sink',
    brandUrl: 'https://github.com/storybookjs/storybook/tree/master/examples/cra-ts-kitchen-sink',
    showRoots: true,
  },
});

// automatically import all files ending in *.stories.(tsx|jsx)
configure(require.context('../src/stories', true, /\.stories\.(mdx|[tj]sx?)$/), module);
