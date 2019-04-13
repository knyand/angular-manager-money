export class CurrencyModel {
  id: string;
  cur: string;
  rate: number;
  scale: number;

  constructor(id: string, cur: string, rate: number, scale: number) {
    this.id = id;
    this.cur = cur;
    this.rate = rate;
    this.scale = scale;
  }
}
