import { DOCUMENT, isPlatformBrowser as pb } from '@angular/common';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
@Injectable({
  providedIn: 'root',
})
export class UniversalService {
  get isPlatformBrowser() {
    return pb(this.platformId);
  }

  get isPlatformServer() {
    return !this.isPlatformBrowser;
  }

  get isTelegramAgent() {
    if (this.isPlatformServer) {
      return this.userAgent?.toLowerCase().includes('telegram');
    }
    return false;
  }

  get isWhatsAppAgent() {
    if (this.isPlatformServer) {
      return this.userAgent?.toLowerCase().includes('whatsapp');
    }
    return false;
  }

  get isLinkedInBotAgent() {
    if (this.isPlatformServer) {
      return this.userAgent?.toLowerCase().includes('linkedin');
    }
    return false;
  }

  get isFacebookAgent() {
    if (this.isPlatformServer) {
      return this.userAgent?.toLowerCase().includes('facebook');
    }
    return false;
  }
  constructor(
    @Inject(PLATFORM_ID) public platformId: any,
    @Inject(DOCUMENT) public doc: Document,
    @Optional() @Inject(REQUEST) public request: Request,
    @Optional() @Inject('USER_AGENT') public userAgent: string
  ) {}
}
