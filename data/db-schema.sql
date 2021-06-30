-- DROP TABLE pokemon;

CREATE Table pokemon(
	against_bug DECIMAL,
	against_dark DECIMAL,
	against_dragon DECIMAL,
	against_electric DECIMAL,
	against_fairy DECIMAL,
	against_fight DECIMAL,
	against_fire DECIMAL,
	against_flying DECIMAL,
	against_ghost DECIMAL,
	against_grass DECIMAL,
	against_ground DECIMAL,
	against_ice DECIMAL,
	against_normal DECIMAL,
	against_poison DECIMAL,
	against_psychic DECIMAL,
	against_rock DECIMAL,
	against_steel DECIMAL,
	against_water DECIMAL,
	attack INT,
	base_egg_steps INT,
	base_happiness INT,
	base_total INT,
	defense INT,
	experience_growth INT,
	height_m DECIMAL,
	hp INT,
	name VARCHAR(50),
	percentage_male DECIMAL,
	pokedex_number INT,
	sp_attack INT,
	sp_defense INT,
	speed INT,
	type1 VARCHAR(50),
	type2 VARCHAR(50),
	weight_kg DECIMAL,
	generation INT,
	is_legendary BOOLEAN);