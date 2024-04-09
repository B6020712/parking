CREATE TABLE parking (
	id varchar(20) UNIQUE NOT NULL PRIMARY KEY,
	name varchar(255) NOT NULL,
	address varchar(255) NOT NULL,
	sub_district varchar(255) NOT NULL,
	parking_space int NOT NULL,
	support_car_type varchar(255) NOT NULL,
	pricing varchar(255) NOT NULL,
	currenttime timestamp
)

INSERT INTO parking (id, name, address, sub_district, parking_space, support_car_type, pricing)
VALUES ('t000000002', 'Test Parking 2', 'Test address 222', '3','1500', '2,3,4', '200-3000')

UPDATE parking SET currenttime = ('2024-04-01'::timestamp)

UPDATE parking SET sub_district = '100101'

UPDATE parking SET id = 2 WHERE id = 't000000002'

ALTER TABLE parking ALTER COLUMN currenttime SET DEFAULT (timezone('utc', now()))

ALTER TABLE parking RENAME COLUMN sub_district TO  sub_district_id

ALTER TABLE parking ALTER COLUMN id TYPE int USING id::integer

CREATE SEQUENCE parking_id_seq;
ALTER TABLE parking ALTER COLUMN id SET DEFAULT nextval('parking_id_seq');
SELECT setval('parking_id_seq', 2); --- 2 was the present maximum id of that time

SELECT * FROM parking

SELECT * FROM geographies

SELECT * FROM amphures

SELECT * FROM sub_districts

SELECT * FROM sub_districts LEFT JOIN amphures ON sub_districts.amphure_id = amphures.id WHERE sub_districts.name_th = 'หนองบอน'