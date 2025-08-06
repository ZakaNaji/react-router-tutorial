import { NavLink } from "react-router-dom";
import type { ContactType } from "../types/contactType";

export default function ContactLink({ contact }: { contact: ContactType }) {
  return (
    <li>
      <NavLink
        to={`contacts/${contact.id}`}
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
      >
        {contact.first || contact.last ? (
          <>
            {contact.first} {contact.last}
          </>
        ) : (
          <i>No Name</i>
        )}{" "}
        {contact.favorite && <span>★</span>}
      </NavLink>
    </li>
  );
}
