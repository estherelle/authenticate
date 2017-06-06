/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Header_user.graphql
 * @generated SignedSource<<0f348a1c2e0d5189ab47eef2fb57da69>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Header_user = {|
  +firstName: ?string;
  +lastName: ?string;
  +role: ?string;
  +postCount: ?number;
|};
*/

const fragment /*: ConcreteFragment*/ = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'Header_user',
  selections: [
    {
      kind: 'ScalarField',
      alias: null,
      args: null,
      name: 'firstName',
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      args: null,
      name: 'lastName',
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      args: null,
      name: 'role',
      storageKey: null,
    },
    {
      kind: 'ScalarField',
      alias: null,
      args: null,
      name: 'postCount',
      storageKey: null,
    },
  ],
  type: 'User',
};

module.exports = fragment;
