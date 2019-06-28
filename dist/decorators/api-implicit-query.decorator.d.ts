import { SwaggerEnumType } from '../types/swagger-enum.type';
export declare const ApiImplicitQuery: (metadata: {
  name: string;
  description?: string;
  required?: boolean;
  type?: any;
  isArray?: boolean;
  enum?: SwaggerEnumType;
  collectionFormat?: 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi';
}) => MethodDecorator;
