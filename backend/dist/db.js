import * as sqlite from "node:sqlite";
const db = new sqlite.DatabaseSync("/var/run/db/backend.db");
db.exec(`
CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phoneNumber TEXT,
    address TEXT
) STRICT;
`);
if (list().length === 0) {
    // Seed the database with some contacts
    create("Brendan", "555-555-5555", "102 Bell Tower Dr");
    create("Tyler", "555-555-5556", "103 Bell Tower Dr");
    create("Jonathan", "555-555-5557", "104 Bell Tower Dr");
    create("Koray", "555-555-5558", "105 Bell Tower Dr");
}
export function create(name, phoneNumber, address) {
    return db
        .prepare("INSERT INTO contacts (name, phoneNumber, address) VALUES (:name, :phoneNumber, :address) RETURNING (id);")
        .all({ name, phoneNumber, address })[0].id;
}
export function list() {
    return db.prepare("SELECT * FROM contacts;").all();
}
export function getById(id) {
    return db
        .prepare("SELECT * FROM contacts WHERE id = :id;")
        .iterate({ id })
        .next().value;
}
export function updateName(id, newName) {
    const changes = db
        .prepare("UPDATE contacts SET name = :newName WHERE id = :id;")
        .run({ newName, id }).changes;
    if (changes === 0)
        throw new Error("Contact not found with ID " + id);
}
export function updatePhoneNumber(id, newPhoneNumber) {
    const changes = db
        .prepare("UPDATE contacts SET phoneNumber = :newPhoneNumber WHERE id = :id;")
        .run({ newPhoneNumber, id }).changes;
    if (changes === 0)
        throw new Error("Contact not found with ID " + id);
}
export function updateAddress(id, newAddress) {
    const changes = db
        .prepare("UPDATE contacts SET address = :newAddress WHERE id = :id;")
        .run({ newAddress, id }).changes;
    if (changes === 0)
        throw new Error("Contact not found with ID " + id);
}
export function deleteById(id) {
    const changes = db
        .prepare("DELETE FROM contacts WHERE id = :id;")
        .run({ id }).changes;
    if (changes === 0)
        throw new Error("Contact not found with ID " + id);
}
