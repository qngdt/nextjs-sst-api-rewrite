import { SSTConfig } from 'sst';
import { WebStack } from './stacks/WebStack';

const sstConfig: SSTConfig = {
  config() {
    return {
      name: 'next-test',
      region: 'us-east-1',
    };
  },
  stacks(app) {
    app.stack(WebStack);
  },
};
export default sstConfig;
