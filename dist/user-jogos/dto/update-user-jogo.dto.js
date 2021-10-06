"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserJogoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_jogo_dto_1 = require("./create-user-jogo.dto");
class UpdateUserJogoDto extends (0, mapped_types_1.PartialType)(create_user_jogo_dto_1.CreateUserJogoDto) {
}
exports.UpdateUserJogoDto = UpdateUserJogoDto;
//# sourceMappingURL=update-user-jogo.dto.js.map