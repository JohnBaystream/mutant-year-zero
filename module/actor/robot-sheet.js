import { MYZActorSheet } from "./actor-sheet.js";

export class MYZRobotSheet extends MYZActorSheet {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["mutant-year-zero", "sheet", "actor"],
            template: "systems/mutant-year-zero/templates/actor/robot-sheet.html",
            width: 720,
            height: 700,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }],
        });
    }
}
