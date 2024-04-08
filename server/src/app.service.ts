import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<div style="width: 100%; height: 100%; text-align: center; background-color: #DDDDDD;"><h1 style="padding: 50 0 0 0;">Welcome to Parking and Pooping</h1></div>';
  }
}
