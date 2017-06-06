/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule Profile_viewer.graphql
 * @generated SignedSource<<225944557c520985697c3210bd2e901b>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Profile_viewer = {|
  +user: ?{|
    +firstName: ?string;
    +lastName: ?string;
    +role: ?string;
  |};
|};
*/

const fragment /*: ConcreteFragment*/ = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'Profile_viewer',
  selections: [
    {
      kind: 'LinkedField',
      alias: null,
      args: null,
      concreteType: 'User',
      name: 'user',
      plural: false,
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
      ],
      storageKey: null,
    },
  ],
  type: 'Viewer',
};

module.exports = fragment;
