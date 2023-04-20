CREATE TABLE newsletter_users
(
    id                 SERIAL PRIMARY KEY,
    full_name          TEXT      NOT NULL,
    email              TEXT      NOT NULL UNIQUE,
    verification_token VARCHAR   NOT NULL UNIQUE,
    inserted_at        TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    verified           BOOLEAN   NOT NULL DEFAULT FALSE
);
