import { db, HSG as HSGCollection } from 'astro:db';
import HSG from '../models/HSG';

// https://astro.build/db/seed
export default async function seed() {
	let hsgs: HSG[] = [
		new HSG("TRAMP", "Trampolin HSG", "Wir sind die Trampolin HSG", "tramp@olin.de"),
		new HSG("GEMÜSE", "Gemüse HSG", "Wir sind die Gemüse HSG", "gemüse@konstanz.de"),
		new HSG("KONSTANZ", "Konstanz HSG", "Wir sind die Konstanz HSG", "wir@konstanz.de", "https://konstanz.de")
	]

	await db.insert(HSGCollection).values(hsgs).execute()
}
