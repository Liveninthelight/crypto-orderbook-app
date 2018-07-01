import * as R from 'ramda';
import { create, env } from 'sanctuary';
// import $ from 'sanctuary-def';

// const withNs = R.concat('crypto-orderbook-app/');

const S: object = create({
  checkTypes: process.env.NODE_ENV !== 'production',
  env: env.concat([]),
});


const isTrue = R.equals(true);
const toFixed = (num: number) => (x: any) => x.toFixed(num);

export default {
  // ALL THE RAMDAS
  ...R,
  // NOTE: Just want the Monads from sanctuary
  ...R.pick([
    'either',
    'Right',
    'left',
  ])(S),
  isTrue,
  toFixed,
};
