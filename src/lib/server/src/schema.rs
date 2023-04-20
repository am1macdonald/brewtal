// @generated automatically by Diesel CLI.

diesel::table! {
    newsletter_users (id) {
        id -> Int4,
        full_name -> Text,
        email -> Text,
        verification_token -> Varchar,
        inserted_at -> Timestamp,
        verified -> Bool,
    }
}
