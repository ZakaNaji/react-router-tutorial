import { redirect, type LoaderFunctionArgs } from "react-router-dom";
import { createContact, getContacts } from "../contact";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query: string = url.searchParams.get("q") ?? "";
  const contacts = await getContacts(query);
  return { contacts, query };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
