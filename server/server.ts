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
    this.setup().catch(err => console.error(err));
  }

  private async setup() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      );
      next();
    });
    await this.importControllers();

    try {
      await mongoose.connect(`mongodb://localhost/runLog`, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });
      console.log('MongoDB Connected...');
    } catch (err) {
      throw new Error(err);
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
