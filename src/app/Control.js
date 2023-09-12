"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export const Control = () => {
  const params = useParams();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href="/update">Update</Link>
          </li>
          <li>
            {" "}
            <input type="button" value="delete" />{" "}
          </li>{" "}
        </>
      ) : null}
    </ul>
  );
};
