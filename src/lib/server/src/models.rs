use chrono::{ NaiveDateTime };
use diesel::prelude::*;
use schema::newsletter_users;
use crate::schema;
// full_name          TEXT      NOT NULL,
// email              TEXT      NOT NULL,
// verification_token VARCHAR   NOT NULL,

#[derive(Queryable)]
pub struct NewsletterUser {
    pub id: i32,
    pub full_name: String,
    pub email: String,
    pub verification_token: String,
    pub inserted_at: NaiveDateTime,
    pub verified: bool,
}

#[derive(Insertable)]
#[diesel(table_name = newsletter_users)]
pub struct NewNewsletterUser<'a> {
    pub full_name: &'a str,
    pub email: &'a str,
    pub verification_token: &'a str,
}
