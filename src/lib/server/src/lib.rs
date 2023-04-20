pub mod models;
pub mod schema;
use uuid::Uuid;
use crate::models::NewNewsletterUser;
use self::models::{NewsletterUser};
use diesel::pg::PgConnection;
use diesel::prelude::*;
use std::env;

pub fn establish_connection() -> PgConnection {
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

pub fn register_for_newsletter(full_name: &str, email: &str) -> NewsletterUser {
    use crate::schema::newsletter_users;
    let uuid_string = Uuid::new_v4().to_string();
    let verification_token: &str = &uuid_string;
    let new_newsletter_user = NewNewsletterUser { full_name, email, verification_token };
    let connection: &mut PgConnection = &mut establish_connection();

    let result: NewsletterUser = diesel::insert_into(newsletter_users::table)
        .values(&new_newsletter_user)
        .get_result(connection)
        .expect("Error creating new newsletter registration");

    println!(
        "localhost:8000/newsletter/verify/{}",
        verification_token
    );
    // println!("{}", result.email);
    result
}

pub fn verify_newsletter_email(token: &str) {
    use crate::schema::newsletter_users::dsl::*;

    let connection = &mut establish_connection();
    let results = newsletter_users
        .filter(verification_token.eq(token))
        .load::<NewsletterUser>(connection)
        .expect("Error loading posts");

    println!("Displaying {} posts", results.len());

    if results.is_empty() {
        println!("No newsletter registration found for token: {}", token);
        panic!("No results found?!");
    } else {
        for user in results {
            println!("{}", user.full_name);
            println!("-----------\n");
            println!("{}", user.email);

            let update_result = diesel::update(newsletter_users)
                .filter(id.eq(user.id))
                .set(verified.eq(true)).execute(connection);

            if let Err(e) = update_result {
                println!("Error updating newsletter registration: {:?}", e);
            } else {
                println!("Successfully updated newsletter registration!");
            }
        }
    }
}
