/* users */

INSERT INTO users (id, username, password, role) VALUES (1, 'jesus', '$2a$12$XZaTV2F1G0gEv/OyllfM1.oskRklw5qpb1mJX6VUYGBmMMpIQdL.G','admin');
INSERT INTO users (id, username, password, role) VALUES (2, 'juan', '$2a$12$XZaTV2F1G0gEv/OyllfM1.oskRklw5qpb1mJX6VUYGBmMMpIQdL.G','user');


/* Roles */

INSERT INTO roles (id, name) VALUES (default, 'ADMIN');
INSERT INTO roles (id, name) VALUES (default, 'USER');

/* roles_users */

INSERT INTO roles_users (role_id, user_id) VALUES (1,1);
INSERT INTO roles_users (role_id, user_id) VALUES (2,2);


/* EVENTS */

INSERT INTO events (title,description, type, date, max_participants, state, img_url) VALUES (
    'Flash Gordon',
    'En el evento hablaremos sobre la pelicula de 1982.
    Entre los asistentes contaremos con la presencia de Pedro Almodovas, Marta Sanchez, Edurne y Cicciolina.
    Tendremos charla sobre los actores y su evolucion. 
    Que hicieron y a donde llegaron.
     Las escenas mas fantasticas de la pelicula y como se rodaron. 
     Que presupuesto tuvo la pelicular y su recaudacion.
     Ademas entraran a participar los actores de doblaje que nos ofreceran script de la pelicula.
     Entre ellos estara el actor estadounidense que protagonizo la frase Gordon is alive.
     ',
'cultura','2023-08-23 20:30:59.711000','20','activo','img/events/flash.jpg');
INSERT INTO events (title,description, type, date, max_participants, state, img_url) VALUES (
    'Musica de los 80',
    'En el evento hablaremos sobre Musica de los 80.
    
     ',
'musica','2023-09-23 17:30:59.711000','40','activo','img/events/80s.jpg');
INSERT INTO events (title,description, type, date, max_participants, state, img_url) VALUES (
    'Juegos de mesa',
    'En el evento hablaremos sobre Juegos de mesa.
    
     ',
'cultura','2023-10-23 19:30:59.711000','15','activo','img/events/juegosmesa.jpg');
INSERT INTO events (title,description, type, date, max_participants, state, img_url) VALUES (
    'Peliculas de terror',
    'En el evento hablaremos sobre peliculas de terror.
    
     ',
'cultura','2023-11-23 23:30:59.711000','10','activo','img/events/terror.jpg');
INSERT INTO events (title,description, type, date, max_participants, state, img_url) VALUES (
    'Programas de television',
    'En el evento hablaremos sobre programas de television.
    
     ',
'cultura','2023-11-23 18:30:59.711000','40','activo','img/events/tv.jpg');
INSERT INTO events (title,description, type, date, max_participants, state, img_url) VALUES (
    'Peliculas de los 80s',
    'En el evento hablaremos sobre peliculas de los 80.
    
     ',
'cultura','2023-11-23 20:30:59.711000','25','activo','img/events/pelis80s.jpg');

/* SLIDER */

INSERT INTO sliders (event_id) VALUES ('1');
INSERT INTO sliders (event_id) VALUES ('2');
INSERT INTO sliders (event_id) VALUES ('4');
INSERT INTO sliders (event_id) VALUES ('5');
INSERT INTO sliders (event_id) VALUES ('6');