import { EntityRepository, Repository } from 'typeorm';

import Category from '../models/Category';

interface Response {
  id: string;
  title: string;
  created_at: Date;
  updated_at: Date;
}

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {
  public async findCategoryWithSameTitle(
    category_title: string,
  ): Promise<Response | null> {
    const foundCategory = await this.findOne({
      where: { title: category_title },
    });

    return foundCategory || null;
  }
}

export default CategoriesRepository;
