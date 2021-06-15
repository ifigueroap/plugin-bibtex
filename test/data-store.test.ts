import { DataStore } from "../src/data/data-store";
import { Reference } from "../src/model/reference.model";
import { readFileSync } from "fs";
import { join } from "path";

describe("Data Store", () => {

    it("Calling SetReference() updates the data in the store", () => {
        let data: Reference[] = JSON.parse(readFileSync(join(__dirname, "assets", "test.json"), "utf-8"));
        DataStore.setReferences(data);

        let res: Reference[] = DataStore.getAllReferences();

        expect(res).toBeInstanceOf(Array);

        // Asserts Deep Equality between input and internal data
        expect(res).toEqual(data);
    });

    it("getAllReferences() returns a distinct copy of internal data", () => {
        let data: Reference[] = JSON.parse(readFileSync(join(__dirname, "assets", "test.json"), "utf-8"));
        DataStore.setReferences(data);

        let res: Reference[] = DataStore.getAllReferences();

        expect(DataStore.getAllReferences()).not.toBe(res);
    });

});