"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const load_package_util_1 = require("@nestjs/common/utils/load-package.util");
const swagger_scanner_1 = require("./swagger-scanner");
class SwaggerModule {
    static createDocument(app, config, options = {}) {
        const document = this.swaggerScanner.scanApplication(app, options.include || []);
        return Object.assign({}, config, document, { swagger: '2.0' });
    }
    static setup(path, app, document, options) {
        const httpAdapter = app.getHttpAdapter();
        if (httpAdapter &&
            httpAdapter.constructor &&
            httpAdapter.constructor.name === 'FastifyAdapter') {
            return this.setupFastify(path, httpAdapter, document);
        }
        return this.setupExpress(path, app, document, options);
    }
    static setupExpress(path, app, document, options) {
        const validatePath = (path) => path.charAt(0) !== '/' ? '/' + path : path;
        const finalPath = validatePath(path);
        const swaggerUi = load_package_util_1.loadPackage('swagger-ui-express', 'SwaggerModule', () => require('swagger-ui-express'));
        const swaggerHtml = swaggerUi.generateHTML(document, options);
        app.use(finalPath, swaggerUi.serveFiles(document, options));
        app.use(finalPath, (req, res) => res.send(swaggerHtml));
        app.use(finalPath + '-json', (req, res) => res.json(document));
    }
    static setupFastify(path, httpServer, document) {
        httpServer.register(load_package_util_1.loadPackage('fastify-swagger', 'SwaggerModule', () => require('fastify-swagger')), {
            swagger: document,
            exposeRoute: true,
            routePrefix: path,
            mode: 'static',
            specification: {
                document
            }
        });
    }
}
SwaggerModule.swaggerScanner = new swagger_scanner_1.SwaggerScanner();
exports.SwaggerModule = SwaggerModule;
