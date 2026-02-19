import { useEffect, useState } from "react";

interface Contact {
  name: string;
  phoneNumber: string;
  address: string;
}

export function useContactList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Contact[] | null>(null);

  useEffect(() => {
    fetch("/api/contacts").then(async (data) => {
      setData(await data.json());
      setLoading(false);
    });
  }, []);

  return { loading, data };
}
