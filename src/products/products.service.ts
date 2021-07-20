import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  create(createProductDto: CreateProductDto): Product {
    return null;
  }

  findAll(): Product[] {
    return null;
  }

  findOne(id: number): Product {
    return null;
  }

  update(id: number, updateProductDto: UpdateProductDto): Product {
    return null;
  }

  remove(id: number) {
    return null;
  }
}
