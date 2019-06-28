import { Controller } from '@nestjs/common/interfaces';
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper';
export declare class SwaggerExplorer {
  private readonly metadataScanner;
  private readonly modelsDefinitions;
  exploreController(
    { instance, metatype }: InstanceWrapper<Controller>,
    modulePath: string
  ): any[];
  getModelsDefinitons(): any[];
  private generateDenormalizedDocument;
  private exploreGlobalMetadata;
  private exploreRoutePathAndMethod;
  private reflectControllerPath;
  private validateRoutePath;
  private mergeMetadata;
  private assignDefaultMimeType;
}
