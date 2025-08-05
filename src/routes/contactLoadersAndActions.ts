import {
  redirect,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router-dom";
import { getContact, updateContact } from "../contact";

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error("ID is mandatory.");
  }
  const contact = await getContact(params.id);
  return contact;
}

export async function updateAction({ request, params }: ActionFunctionArgs) {
  if (!params.id) {
    throw new Error("ID is mandatory");
  }

  const formData = await request.formData();
  const updatedContact = Object.fromEntries(formData.entries());
  await updateContact(params.id, updatedContact);
  return redirect(`/contacts/${params.id}`);
}
