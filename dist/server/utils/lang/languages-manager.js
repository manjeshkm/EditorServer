"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const language_1 = require("./language");
class LanguagesManager {
    static getLanguageVersionIndex(lang, version) {
        if (this.isLangSupported(lang, version)) {
            const langEntrys = this.languagesMap.get(lang);
            const entry = langEntrys.find(lang => lang.version == version);
            if (entry) {
                return entry.index;
            }
        }
    }
    static isLangSupported(lang, version) {
        if (this.languagesMap.has(lang)) {
            const langEntrys = this.languagesMap.get(lang);
            return langEntrys.some(lang => lang.version == version);
        }
        else {
            return false;
        }
    }
    static getLanguagesMap() {
        return this.languagesMap;
    }
}
exports.LanguagesManager = LanguagesManager;
LanguagesManager.languagesMap = new Map(language_1.languagesTable);
//# sourceMappingURL=languages-manager.js.map