import { redirect } from "react-router-dom";
import { createContact, getContacts } from "../contact";

export async function loader() {
  return await getContacts();
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
