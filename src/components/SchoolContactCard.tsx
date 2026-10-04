import { Icon } from "./Icons";
import type { School } from "@/lib/content";

export function SchoolContactCard({ school }: { school: School }) {
  return (
    <div className="contact-card">
      <h3>{school.name}</h3>
      <span className="contact-tag">
        {school.stage}
        {school.founded ? ` · Est. ${school.founded}` : ""}
      </span>
      <ul>
        <li><Icon name="pin" /><span>{school.address}</span></li>
        <li><Icon name="phone" /><a href={`tel:${school.phones[0].replace(/[^+\d]/g, "")}`}>{school.phones[0]}</a></li>
        <li><Icon name="mail" /><a href={`mailto:${school.email}`}>{school.email}</a></li>
      </ul>
    </div>
  );
}
