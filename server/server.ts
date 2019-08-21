import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

class App {
  private app: Express;
  private imports: Express[];
  private port = process.env.PORT || 5000;

  constructor() {
    dotenv.config({ path: '../config.env' });
    this.app = express();
    this.imports = Array<Express>();
    this.setup();
  }

  private async setup() {
    this.app.use(morgan('dev'));
    await this.importControllers();
    this.app.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    );
  }

  private async importControllers(): Promise<void> {
    const imports = [
      await import('./Controllers/UserController'),
      await import('./Controllers/CheckHealthController')
    ];

    let imps: Express[] = [];
    for (let imp of imports) {
      imps.push(imp.app);
    }
    this.imports = imps;
    this.useImports();
  }

  private useImports(): void {
    for (let imp of this.imports) {
      this.app.use(imp);
    }
  }
}

const app = new App();
