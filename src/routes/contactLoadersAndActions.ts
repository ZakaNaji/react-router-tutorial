import type { LoaderFunctionArgs } from "react-router-dom";
import { getContact } from "../contact";

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.id) {
    throw new Error("ID is mandatory.");
  }
  const contact = await getContact(params.id);
  return contact;
}
