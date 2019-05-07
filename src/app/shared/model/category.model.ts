export class Category {
  categoryName: string;
  limit: number;


  constructor(categoryName: string, limit: number) {
    this.categoryName = categoryName;
    this.limit = limit;
  }
}
