import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('Date', type => Date)
export class DateScalar implements CustomScalar<string, Date> {
  description = 'Date scalar type';

  parseValue(value: string): Date {
    return new Date(value);
  }

  serialize(value: Date): string {
    return new Date(value).toISOString();
  }

  parseLiteral(ast: any): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  }
}
