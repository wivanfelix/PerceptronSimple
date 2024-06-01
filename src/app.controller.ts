import { Controller, Get, Req, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('calculate')
  async randomCalculate() {
    //x1 son valores aleatorios enteros entre 1 y 6
    const x1 = Math.floor(Math.random() * 6) + 1;
    //x2 son valores aleatorios enteros entre 1 y 3
    const x2 = Math.floor(Math.random() * 3) + 1;
    //b son valores aleatorios enteros entre -3 y 3
    const b = Math.floor(Math.random() * 7) - 3;
    return this.appService.calculate(x1, x2, b);
  }

  @Get('calculate/:x1/:x2/:b')
  async calculate(
    @Param('x1') x1: number,
    @Param('x2') x2: number,
    @Param('b') b: number,
  ) {
    // w1 = x1 parsed to number
    const w1 = Number(x1);
    // w2 = x2 parsed to number
    const w2 = Number(x2);
    // wb = b parsed to number
    const wb = Number(b);
    return this.appService.calculate(w1, w2, wb);
  }
}
