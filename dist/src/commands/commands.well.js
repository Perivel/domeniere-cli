"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// commands well
__exportStar(require("./scaffold-domain.command"), exports);
__exportStar(require("./scaffold-module.command"), exports);
__exportStar(require("./scaffold-value.command"), exports);
__exportStar(require("./scaffold-entity.command"), exports);
__exportStar(require("./scaffold-aggregate.command"), exports);
__exportStar(require("./scaffold-factory.command"), exports);
__exportStar(require("./scaffold-repository.command"), exports);
__exportStar(require("./scaffold-command.command"), exports);
__exportStar(require("./scaffold-query.command"), exports);
__exportStar(require("./scaffold-event.command"), exports);
__exportStar(require("./scaffold-specification.command"), exports);
__exportStar(require("./scaffold-dto.command"), exports);
__exportStar(require("./scaffold-exception.command"), exports);
