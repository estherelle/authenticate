/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule PostListItem_post.graphql
 * @generated SignedSource<<6077fd617613370d1d619aa4fe35d3b0>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type PostListItem_post = {|
  +title: ?string;
  +image: ?string;
|};
*/

const fragment /*: ConcreteFragment*/ = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'PostListItem_post',
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      args: null,
      name: 'title',
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      args: null,
      name: 'image',
      storageKey: null,
    },
  ],
  type: 'Post',
};

module.exports = fragment;
