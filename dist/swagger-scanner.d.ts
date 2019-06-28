import { SwaggerDocument } from './interfaces';
export declare class SwaggerScanner {
  private readonly explorer;
  private readonly transfomer;
  scanApplication(app: any, includedModules?: Function[]): SwaggerDocument;
  scanModuleRoutes(routes: any, modulePath: any): SwaggerDocument;
  getModules(modulesContainer: Map<any, any>, include: Function[]): any[];
}
