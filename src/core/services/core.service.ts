import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class CoreService {
  status() {
    return {
      app: {
        pid: process.pid,
        title: process.title,
        argv: process.argv,
        versions: process.versions,
        node_env: process.env.NODE_ENV,
      },
      system: {
        arch: process.arch,
        platform: process.platform,
        type: os.type(),
        release: os.release(),
        hostname: os.hostname(),
        uptime: process.uptime(),
        cores: os.cpus().length,
        memory: os.totalmem(),
      },
      time: new Date().toISOString(),
    };
  }
}
