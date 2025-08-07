import { Form, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import type { ContactType } from "../types/contactType.js";
import ContactLink from "./contact_link";
import { useEffect } from "react";

export default function Root() {
  const { contacts, query }: { contacts: ContactType[]; query: string } =
    useLoaderData();
  const navigation = useNavigation();

  useEffect(() => {
    (document.getElementById("q") as HTMLInputElement).value = query;
  }, [query]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={query}
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <ContactLink key={contact.id} contact={contact} />
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === "loading" ? "loading" : ""}
      >
        <Outlet />
      </div>
    </>
  );
}
