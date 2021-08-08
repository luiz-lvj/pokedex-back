--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: pokemons; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pokemons (
    id integer NOT NULL,
    name character varying NOT NULL,
    number integer NOT NULL,
    image character varying NOT NULL,
    weight integer NOT NULL,
    height integer NOT NULL,
    "baseExp" integer NOT NULL,
    description character varying NOT NULL
);


--
-- Name: pokemons_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.pokemons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pokemons_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.pokemons_id_seq OWNED BY public.pokemons.id;


--
-- Name: pokemons_users_users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pokemons_users_users (
    "pokemonsId" integer NOT NULL,
    "usersId" integer NOT NULL
);


--
-- Name: userSessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."userSessions" (
    id integer NOT NULL,
    "userId" integer,
    token character varying NOT NULL
);


--
-- Name: userSessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."userSessions_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: userSessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."userSessions_id_seq" OWNED BY public."userSessions".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    "hashPassword" character varying NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: pokemons id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemons ALTER COLUMN id SET DEFAULT nextval('public.pokemons_id_seq'::regclass);


--
-- Name: userSessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userSessions" ALTER COLUMN id SET DEFAULT nextval('public."userSessions_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.migrations VALUES (9, 1628358636502, 'migration1628358636502');
INSERT INTO public.migrations VALUES (10, 1628360088808, 'noname1628360088808');
INSERT INTO public.migrations VALUES (11, 1628360543367, 'hashpassword1628360543367');
INSERT INTO public.migrations VALUES (12, 1628366817410, 'tokenString1628366817410');
INSERT INTO public.migrations VALUES (13, 1628374436813, 'noToken1628374436813');
INSERT INTO public.migrations VALUES (14, 1628374488375, 'tokenString1628374488375');


--
-- Data for Name: pokemons; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.pokemons VALUES (1, 'weedle', 17, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png', 32, 3, 39, 'weedle');
INSERT INTO public.pokemons VALUES (2, 'nidoran-f', 55, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/29.png', 70, 4, 55, 'nidoran-f');
INSERT INTO public.pokemons VALUES (3, 'muk', 134, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/89.png', 300, 12, 175, 'muk');
INSERT INTO public.pokemons VALUES (4, 'aerodactyl', 220, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/142.png', 590, 18, 180, 'aerodactyl');
INSERT INTO public.pokemons VALUES (5, 'slowpoke', 120, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/79.png', 360, 12, 63, 'slowpoke');
INSERT INTO public.pokemons VALUES (6, 'flareon', 207, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/136.png', 250, 9, 184, 'flareon');
INSERT INTO public.pokemons VALUES (7, 'starmie', 182, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/121.png', 800, 11, 182, 'starmie');
INSERT INTO public.pokemons VALUES (8, 'electabuzz', 191, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/125.png', 300, 11, 172, 'electabuzz');
INSERT INTO public.pokemons VALUES (9, 'rattata', 25, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png', 35, 3, 51, 'rattata');
INSERT INTO public.pokemons VALUES (10, 'jynx', 189, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/124.png', 406, 14, 159, 'jynx');
INSERT INTO public.pokemons VALUES (11, 'haunter', 139, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/93.png', 1, 16, 142, 'haunter');
INSERT INTO public.pokemons VALUES (12, 'fearow', 31, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png', 380, 12, 155, 'fearow');
INSERT INTO public.pokemons VALUES (13, 'vulpix', 64, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/37.png', 99, 6, 60, 'vulpix');
INSERT INTO public.pokemons VALUES (14, 'dodrio', 129, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/85.png', 852, 18, 165, 'dodrio');
INSERT INTO public.pokemons VALUES (15, 'golbat', 72, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/42.png', 550, 16, 159, 'golbat');
INSERT INTO public.pokemons VALUES (16, 'nidoran-m', 58, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/32.png', 90, 5, 55, 'nidoran-m');
INSERT INTO public.pokemons VALUES (17, 'cloyster', 137, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/91.png', 1325, 15, 184, 'cloyster');
INSERT INTO public.pokemons VALUES (18, 'persian', 88, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/53.png', 320, 10, 154, 'persian');
INSERT INTO public.pokemons VALUES (19, 'sandslash', 53, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/28.png', 295, 10, 158, 'sandslash');
INSERT INTO public.pokemons VALUES (20, 'bellsprout', 107, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/69.png', 40, 7, 60, 'bellsprout');
INSERT INTO public.pokemons VALUES (21, 'dratini', 227, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/147.png', 33, 18, 60, 'dratini');
INSERT INTO public.pokemons VALUES (22, 'ditto', 203, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png', 40, 3, 101, 'ditto');
INSERT INTO public.pokemons VALUES (23, 'nidoqueen', 57, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/31.png', 600, 13, 227, 'nidoqueen');
INSERT INTO public.pokemons VALUES (24, 'ponyta', 118, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/77.png', 300, 10, 82, 'ponyta');
INSERT INTO public.pokemons VALUES (25, 'kabutops', 219, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/141.png', 405, 13, 173, 'kabutops');
INSERT INTO public.pokemons VALUES (26, 'exeggcute', 151, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/102.png', 25, 4, 65, 'exeggcute');
INSERT INTO public.pokemons VALUES (27, 'psyduck', 90, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/54.png', 196, 8, 64, 'psyduck');
INSERT INTO public.pokemons VALUES (28, 'venusaur', 3, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png', 1000, 20, 236, 'venusaur');
INSERT INTO public.pokemons VALUES (29, 'koffing', 164, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/109.png', 10, 6, 68, 'koffing');
INSERT INTO public.pokemons VALUES (30, 'sandshrew', 51, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/27.png', 120, 6, 60, 'sandshrew');
INSERT INTO public.pokemons VALUES (31, 'ekans', 32, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png', 69, 20, 58, 'ekans');
INSERT INTO public.pokemons VALUES (32, 'omanyte', 216, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/138.png', 75, 4, 71, 'omanyte');
INSERT INTO public.pokemons VALUES (33, 'nidoking', 60, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png', 620, 14, 227, 'nidoking');
INSERT INTO public.pokemons VALUES (34, 'blastoise', 12, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png', 855, 16, 239, 'blastoise');
INSERT INTO public.pokemons VALUES (35, 'machoke', 105, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/67.png', 705, 15, 142, 'machoke');
INSERT INTO public.pokemons VALUES (36, 'clefairy', 62, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png', 75, 6, 113, 'clefairy');
INSERT INTO public.pokemons VALUES (37, 'mewtwo', 230, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png', 1220, 20, 306, 'mewtwo');
INSERT INTO public.pokemons VALUES (38, 'golduck', 91, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/55.png', 766, 17, 175, 'golduck');
INSERT INTO public.pokemons VALUES (39, 'scyther', 185, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/123.png', 560, 15, 100, 'scyther');
INSERT INTO public.pokemons VALUES (40, 'venomoth', 81, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png', 125, 15, 158, 'venomoth');
INSERT INTO public.pokemons VALUES (41, 'geodude', 112, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/74.png', 200, 4, 60, 'geodude');
INSERT INTO public.pokemons VALUES (42, 'chansey', 170, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png', 346, 11, 395, 'chansey');
INSERT INTO public.pokemons VALUES (43, 'growlithe', 94, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png', 190, 7, 70, 'growlithe');
INSERT INTO public.pokemons VALUES (44, 'mankey', 92, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/56.png', 280, 5, 61, 'mankey');
INSERT INTO public.pokemons VALUES (45, 'wigglytuff', 70, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/40.png', 120, 10, 196, 'wigglytuff');
INSERT INTO public.pokemons VALUES (46, 'pikachu', 35, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png', 60, 4, 112, 'pikachu');
INSERT INTO public.pokemons VALUES (47, 'grimer', 132, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/88.png', 300, 9, 65, 'grimer');
INSERT INTO public.pokemons VALUES (48, 'marowak', 155, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/105.png', 450, 10, 149, 'marowak');
INSERT INTO public.pokemons VALUES (49, 'tentacool', 110, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/72.png', 455, 9, 67, 'tentacool');
INSERT INTO public.pokemons VALUES (50, 'kabuto', 218, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/140.png', 115, 5, 71, 'kabuto');


--
-- Data for Name: pokemons_users_users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.pokemons_users_users VALUES (13, 1);
INSERT INTO public.pokemons_users_users VALUES (19, 1);


--
-- Data for Name: userSessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."userSessions" VALUES (1, 1, '4727a1b8-27d9-4f47-b9f8-f10abab7d005');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'olaf@test.com', '$2b$10$d.2pk4kSPeK24Z0YNOQD.OIoh2xOMOZFDnEjaAWyrSMCzGETHkE3e');


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 14, true);


--
-- Name: pokemons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.pokemons_id_seq', 50, true);


--
-- Name: userSessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."userSessions_id_seq"', 1, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: pokemons_users_users PK_15184e7b10aabbc5e97c2129c8b; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemons_users_users
    ADD CONSTRAINT "PK_15184e7b10aabbc5e97c2129c8b" PRIMARY KEY ("pokemonsId", "usersId");


--
-- Name: userSessions PK_2027103260897e33877b442a453; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userSessions"
    ADD CONSTRAINT "PK_2027103260897e33877b442a453" PRIMARY KEY (id);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: pokemons PK_a3172290413af616d9cfa1fdc9a; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT "PK_a3172290413af616d9cfa1fdc9a" PRIMARY KEY (id);


--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- Name: IDX_703c8f8041ef2c3585514339c1; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "IDX_703c8f8041ef2c3585514339c1" ON public.pokemons_users_users USING btree ("pokemonsId");


--
-- Name: IDX_7ab03e9faba604ae4b3a0b76fd; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "IDX_7ab03e9faba604ae4b3a0b76fd" ON public.pokemons_users_users USING btree ("usersId");


--
-- Name: userSessions FK_2a1b098f8703d846b54854eba9f; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userSessions"
    ADD CONSTRAINT "FK_2a1b098f8703d846b54854eba9f" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: pokemons_users_users FK_703c8f8041ef2c3585514339c18; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemons_users_users
    ADD CONSTRAINT "FK_703c8f8041ef2c3585514339c18" FOREIGN KEY ("pokemonsId") REFERENCES public.pokemons(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: pokemons_users_users FK_7ab03e9faba604ae4b3a0b76fd4; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pokemons_users_users
    ADD CONSTRAINT "FK_7ab03e9faba604ae4b3a0b76fd4" FOREIGN KEY ("usersId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

