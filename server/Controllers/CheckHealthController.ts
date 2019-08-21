import express, { Response } from 'express';
export class CheckHealthController {
  public static HealthTest = (res: Response) => {
    res.status(200).send('Success');
  };
}
