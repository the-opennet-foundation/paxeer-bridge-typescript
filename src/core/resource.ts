// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PaxeerBridge } from '../client';

export abstract class APIResource {
  protected _client: PaxeerBridge;

  constructor(client: PaxeerBridge) {
    this._client = client;
  }
}
