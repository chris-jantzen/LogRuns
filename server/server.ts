import express, { Express } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';

declare const process: {
  env: {
    DB_PORT: number;
    PORT: number;
    USER: string;
    PASSWORD: string;
  };
};

class App {
  private app: Express;
  private imports: Express[];
  private port: number = process.env.PORT || 5000;

  constructor() {
    dotenv.config({ path: '../config.env' });
    this.app = express();
    this.imports = Array<Express>();
    this.setup();
  }

  private async setup() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    await this.importControllers();

    try {
      await mongoose.connect(`mongodb://localhost/runLog`, {
        useNewUrlParser: true,
        useFindAndModify: false
      });
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err);
    }

    this.app.listen(this.port, () =>
      console.log(`Listening on port ${this.port}`)
    );
  }

  private async importControllers(): Promise<void> {
    const imports = [
      await import('./Routes/UserRoutes'),
      await import('./Routes/CheckHealthRoutes')
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
