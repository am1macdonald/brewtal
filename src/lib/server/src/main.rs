extern crate dotenv;

use dotenv::dotenv;
use rocket::form::Form;
use server::{register_for_newsletter, verify_newsletter_email};

#[macro_use]
extern crate rocket;

#[derive(FromForm)]
struct NewsletterRegistration<'r> {
    name: &'r str,
    email: &'r str,
}

#[post("/register", data = "<newsletter_registration>")]
fn new_newsletter_user(newsletter_registration: Form<NewsletterRegistration<'_>>) -> &'static str {
    println!(
        "{}, {}",
        newsletter_registration.name, newsletter_registration.email
    );

    register_for_newsletter(newsletter_registration.name, newsletter_registration.email, );
    "Successfully registered!"
}

#[get("/verify/<token>")]
fn verify_newsletter_user(token: &str,) -> &'static str {
    verify_newsletter_email(token);
    "Successfully verified!"
}

#[rocket::main]
async fn main() -> Result<(), rocket::Error> {
    dotenv().ok();
    let _rocket = rocket::build()
        .mount("/newsletter", routes![new_newsletter_user, verify_newsletter_user])
        .launch()
        .await?;
    Ok(())
}
