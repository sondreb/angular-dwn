import { Component, OnInit } from '@angular/core';
import { Dwn } from '@tbd54566975/dwn-sdk-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dwn-ui';
  dwn: Dwn | undefined;

  async ngOnInit(): Promise<void> {
    console.log('begin testing');
    console.log('in ngOnInit');

    this.dwn = await Dwn.create({});

    const writeString = '{"descriptor":{"target":"did:key:z6MkhKKphdZLEm5wYxPFJMVXTUUgx195GTnRDzyGQ7JGyerT","recipient":"did:key:z6MkhKKphdZLEm5wYxPFJMVXTUUgx195GTnRDzyGQ7JGyerT","method":"CollectionsWrite","schema":"myAwesomeSchema","recordId":"895de109-a8a3-496a-b81d-8859b46ef3d5","dataCid":"bafybeibylupwkn7clo4yww2mdnafjprr5udohe3whwagexwjpuacjlgr4y","dateCreated":1667251823994,"dataFormat":"application/json"},"authorization":{"payload":"eyJkZXNjcmlwdG9yQ2lkIjoiYmFmeXJlaWdpNWR3bnVzdXF3NXFvcHV4bW03a3R3N2p5cXA3YXc3aG5vemo3am9rdG1uNzV4aXhxNDQifQ","signatures":[{"protected":"eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2hLS3BoZFpMRW01d1l4UEZKTVZYVFVVZ3gxOTVHVG5SRHp5R1E3Skd5ZXJUI3o2TWtoS0twaGRaTEVtNXdZeFBGSk1WWFRVVWd4MTk1R1RuUkR6eUdRN0pHeWVyVCJ9","signature":"VrENZhDtOIjnf5ByCKtiSXN4Dl6-tyu-pYFUlyNOD5BBf8hVA6S3gJD1KIC2hcNmETA34GEi770U7aMNL0YfCA"}]},"encodedData":"SktFVGZtTDkwTUNYRm5GVWp3WmlJVjExSjBiMHBWNmI"}';
    const write = JSON.parse(writeString);
    let result = await this.dwn.processMessage(write);
    console.log(result);

    const queryString = '{"descriptor":{"target":"did:key:z6MkhKKphdZLEm5wYxPFJMVXTUUgx195GTnRDzyGQ7JGyerT","method":"CollectionsQuery","dateCreated":1667251824004,"filter":{"schema":"myAwesomeSchema"}},"authorization":{"payload":"eyJkZXNjcmlwdG9yQ2lkIjoiYmFmeXJlaWhmNXVxczRxbndvYzdhc3lsYmp3anJrY3FmdjR0ZW1idWNia2p6Mzd4c2R3Y3ppM29tZ20ifQ","signatures":[{"protected":"eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2hLS3BoZFpMRW01d1l4UEZKTVZYVFVVZ3gxOTVHVG5SRHp5R1E3Skd5ZXJUI3o2TWtoS0twaGRaTEVtNXdZeFBGSk1WWFRVVWd4MTk1R1RuUkR6eUdRN0pHeWVyVCJ9","signature":"rD2UoloqkGuZcMA05Kcuj_UJAuLygPeYxgNnRzkkwGkxJEQJWTBxeFzZBEYY8BqnZ9itwRlqWrZowfzCxGg_AA"}]}}';
    const query = JSON.parse(queryString);
    result = await this.dwn.processMessage(query);
    console.log(result);

    console.log('end testing');
  }

  constructor() {
    console.log(Dwn);
  }
}
